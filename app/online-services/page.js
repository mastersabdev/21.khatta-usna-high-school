import { getOnlineServices } from "@/services/online-services";
import Link from "next/link";
import { FiExternalLink, FiLink } from "react-icons/fi";

export const metadata = {
  title: "অনলাইন সেবা",
  description: "আমাদের বিদ্যালয়ের অনলাইন সেবা সম্পর্কে বিস্তারিত তথ্য",
};

export default async function OnlineServices() {
  const onlineServices = await getOnlineServices();
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="section-title mb-10">অনলাইন সেবা</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {onlineServices && onlineServices?.length > 0 ? (
            onlineServices.map((service) => (
              <Link
                key={service.id}
                href={service.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-primary-200 transition-all px-7 py-3 min-h-[120px] group"
              >
                <span className="mb-2 flex items-center justify-center w-10 h-10 rounded-full bg-primary-50 text-primary-600 group-hover:bg-primary-100 transition">
                  <FiExternalLink className="text-xl" />
                </span>
                <h3 className="text-lg md:text-xl font-bold text-center mb-2 text-primary-800 group-hover:text-primary-600 transition">
                  {service.title}
                </h3>
                <p className="text-sm text-center text-slate-600 line-clamp-3">
                  {service.service_details}
                </p>
              </Link>
            ))
          ) : (
            <div className="flex col-span-full flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
              <span className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-500 ring-1 ring-inset ring-slate-200">
                <FiLink className="text-xl" />
              </span>
              <h2 className="text-lg font-semibold text-slate-800">
                No online services available
              </h2>
              <p className="mt-1 text-slate-600">
                Please check back later for updates.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
