import Empty from "@/components/common/Empty";
import { getStudentSummary } from "@/services/academic";
import { parsePagination } from "@/utils/paginationParser";
import StudentListTable from "./components/StudentListTable";
import Pagination from "@/components/ui/Pagination";

export default async function StudentsListPage({ searchParams }) {
  const params = await searchParams;
  const page = params.page;
  const limit = 12;
  const data = await getStudentSummary(page, limit);
  const items = data.item ?? [];
  const pagination = parsePagination(data.meta ?? {});

  return (
    <section className="container pt-8 md:pt-10 pb-12">
      <header className="mb-6 md:mb-8">
        <h1 className="section-title py-2">শ্রেণি ও শিক্ষার্থী</h1>
        <p className="mt-1 text-slate-600">
          আমাদের বিদ্যালয়ের শ্রেণি ও শিক্ষার্থীদের তালিকা।
        </p>
      </header>

      {items.length === 0 ? (
        <Empty
          title="No data available"
          description="Please check back later for updates."
        />
      ) : (
        <>
          <StudentListTable data={items} />

          {/* Use the Pagination component */}
          {items.length >= limit && (
            <Pagination
              page={pagination.page}
              hasPrev={pagination.hasPrev}
              hasNext={pagination.hasNext}
              baseUrl="/academic/students-list"
            />
          )}
        </>
      )}
    </section>
  );
}
