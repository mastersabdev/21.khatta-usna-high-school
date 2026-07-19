import ClassRoutineCard from "@/components/card/ClassRoutineCard";
import Empty from "@/components/common/Empty";
import { classRoutines } from "@/services/academic";

export const metadata = {
  title: "ক্লাস রুটিন",
  description: "আমাদের বিদ্যালয়ের ক্লাস রুটিন সম্পর্কে বিস্তারিত তথ্য",
};

const ClassRoutinePage = async () => {
  const classRoutineData = await classRoutines();

  return (
    <main className="mt-4 lg:mt-8 container">
      <h2 className="section-title mb-4">ক্লাস রুটিন</h2>
      <p className="text-slate-500 mt-2 text-sm sm:text-base">
        আমাদের বিদ্যালয়ের ক্লাস রুটিন সম্পর্কে বিস্তারিত তথ্য
      </p>

      <div className="mt-8">
        {classRoutineData && classRoutineData?.length > 0 ? (
          <ClassRoutineCard data={classRoutineData} />
        ) : (
          <Empty
            title="ক্লাস রুটিন পাওয়া যায়নি"
            description={"ক্লাস রুটিনের তথ্য উপলব্ধ নেই।"}
          />
        )}
      </div>
    </main>
  );
};

export default ClassRoutinePage;
