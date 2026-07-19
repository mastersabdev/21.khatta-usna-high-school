"use server";

const campusMasterBaseUrl = (process.env.CAMPUSMASTER_BASE_URL || "").replace(
  /\/$/,
  "",
);
const instituteId =
  process.env.INSTITUTE_ID || process.env.INSITUTE_ID || "";
const branchId = process.env.BRANCH_ID || "";

function buildExamResultPayload(body) {
  const payload = {
    institute_id: instituteId,
    ...body,
  };

  if (branchId) {
    payload.branch_id = Number(branchId);
  }

  return payload;
}

async function postExamResult(path, body) {
  if (!campusMasterBaseUrl) {
    throw new Error("CAMPUSMASTER_BASE_URL is not configured");
  }

  if (!instituteId) {
    throw new Error("INSTITUTE_ID is not configured");
  }

  if (!branchId) {
    throw new Error("BRANCH_ID is not configured");
  }

  const response = await fetch(
    `${campusMasterBaseUrl}/api/exam-result/${path}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(buildExamResultPayload(body)),
      cache: "no-store",
    },
  );

  const json = await response.json();

  if (!response.ok || json?.status === false) {
    throw new Error(json?.message || "Request failed");
  }

  return json?.data;
}

export async function fetchStudentResultFilters(studentId) {
  return postExamResult("filters", {
    student_id: String(studentId || "").trim(),
  });
}

export async function fetchStudentResult(
  studentId,
  academicYear,
  examConfigurationId,
) {
  return postExamResult("search", {
    student_id: String(studentId || "").trim(),
    academic_year: Number(academicYear),
    exam_configuration_id: Number(examConfigurationId),
  });
}

export async function fetchSectionWiseOptions(academicYear) {
  const body = {};

  if (academicYear) {
    body.academic_year = Number(academicYear);
  }

  return postExamResult("section-wise/options", body);
}

export async function fetchSectionWiseResults({
  academicYear,
  sectionId,
  groupId,
  examConfigurationId,
}) {
  return postExamResult("section-wise/results", {
    academic_year: Number(academicYear),
    section_id: Number(sectionId),
    group_id: Number(groupId),
    exam_configuration_id: Number(examConfigurationId),
  });
}
