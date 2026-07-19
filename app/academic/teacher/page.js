import FadeInFromLeft from "@/components/animations/FadeInFromLeft";
import TeacherCard from "@/components/card/TeacherCard";
import Empty from "@/components/common/Empty";
import { getTeachers } from "@/services/home";

export const metadata = {
  title: "শিক্ষক-শিক্ষিকার তালিকা",
  description:
    "আমাদের বিদ্যালয়ের শিক্ষক-শিক্ষিকার তালিকা সম্পর্কে বিস্তারিত তথ্য",
};

const Teachers = async () => {
  const teachers = await getTeachers();
  return (
    <main className="mt-4 lg:mt-8 container">
      <h2 className="section-title mb-4">শিক্ষক-শিক্ষিকার তালিকা</h2>
      <p className="text-slate-500 mt-2 text-sm sm:text-base">
        আমাদের অভিজ্ঞ শিক্ষকদের সাথে পরিচিত হন
      </p>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8">
        {teachers && teachers?.length > 0 ? (
          teachers.map((teacher, index) => (
            <FadeInFromLeft key={teacher?.id} delay={index * 0.1}>
              <TeacherCard teacher={teacher} />
            </FadeInFromLeft>
          ))
        ) : (
          <Empty
            className={"col-span-full"}
            title="No data yet!"
            description="Please check back later for updates."
          />
        )}
      </div>
    </main>
  );
};

export default Teachers;
