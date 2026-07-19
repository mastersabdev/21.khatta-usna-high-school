import { getAboutUs } from "@/services/about-us";
import Image from "next/image";

export const metadata = {
  title: "প্রতিষ্ঠান পরিচিতি",
  description: "আমাদের বিদ্যালয় সম্পর্কে বিস্তারিত তথ্য",
};

const AboutPage = async () => {
  const aboutData = await getAboutUs();
  return (
    <section className="container mt-6 lg:mt-10 space-y-8">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-50 via-white to-primary-50/50 p-6 sm:p-10 shadow-sm border border-slate-200/80">
        <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-primary-100/60 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-secondary/20 blur-3xl" />
        <div className="relative">
          <h1 className="text-center text-2xl pt-1.5 sm:text-3xl font-extrabold section-title">
            {aboutData?.title || "প্রতিষ্ঠান পরিচিতি"}
          </h1>
          {aboutData?.subtitle && (
            <p className="mx-auto mt-3 max-w-3xl text-center text-slate-600 text-base leading-relaxed">
              {aboutData.subtitle}
            </p>
          )}
        </div>
      </div>

      <div className="relative h-60 sm:h-[60vh] w-full">
        <Image
          className="rounded-lg object-cover"
          src={aboutData?.image_url || "/images/common/placeholder.svg"}
          alt={aboutData?.title || "প্রতিষ্ঠান পরিচিতি"}
          fill
        />
      </div>

      {/* Key Information */}
      <section className="page-card">
        <h2 className="text-center text-lg sm:text-2xl font-semibold text-slate-800">
          প্রতিষ্ঠানের মূল তথ্য
        </h2>
        <div className="mx-auto mt-4 h-px w-24 rounded-full bg-gradient-to-r from-primary-200 via-primary-300 to-primary-400" />
        <dl className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {[
            { label: "EIIN", value: aboutData?.eiin },
            { label: "অবস্থান", value: aboutData?.location },
            { label: "Established", value: aboutData?.established_year },
            { label: "MPO স্ট্যাটাস", value: aboutData?.mpo },
          ]
            .filter((i) => i.value)
            .map((item) => (
              <div
                key={item.label}
                className="flex items-start justify-between rounded-xl border border-slate-200/70 bg-primary-50/30 p-4"
              >
                <dt className="font-medium text-slate-600">{item.label}</dt>
                <dd className="text-slate-900 font-semibold">{item.value}</dd>
              </div>
            ))}
        </dl>
      </section>

      {/* Description */}
      <div className="page-card">
        {aboutData?.description ? (
          <div
            className="text-slate-700"
            dangerouslySetInnerHTML={{ __html: aboutData.description }}
          />
        ) : (
          <p className="text-center text-slate-500">তথ্য পাওয়া যায়নি।</p>
        )}
      </div>
    </section>
  );
};

export default AboutPage;
