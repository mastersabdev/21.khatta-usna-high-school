import FadeInFromLeft from "@/components/animations/FadeInFromLeft";
import TeacherCard from "@/components/card/TeacherCard";
import { getTeachers } from "@/services/home";

const OurTeachers = async () => {
  const teachers = await getTeachers();
  return (
    <section className="pt-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold section-title">
          Our Teachers
        </h2>
        <p className="text-slate-500 mt-3 text-sm sm:text-base">
          Meet our passionate and experienced educators
        </p>
      </div>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {teachers && teachers?.length > 0 ? (
          teachers.map((teacher, index) => (
            <FadeInFromLeft key={teacher?.id} delay={index * 0.1}>
              <TeacherCard teacher={teacher} />
            </FadeInFromLeft>
          ))
        ) : (
          <p className="text-slate-500">No data found.</p>
        )}
      </div>
    </section>
  );
};

export default OurTeachers;
