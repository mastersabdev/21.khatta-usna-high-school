import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

const ContactInfo = ({ data }) => {
  return (
    <section className="page-card h-full sm:p-10">
      <h2 className="section-title mb-10">যোগাযোগের তথ্য</h2>
      <div className="space-y-6">
        <div className="flex items-center gap-5 group/contact hover:bg-primary-50/50 rounded-2xl p-4 transition">
          <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 text-3xl shadow-sm group-hover/contact:scale-105 transition-transform">
            <FiMapPin />
          </span>
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-1 tracking-wide">
              ঠিকানা
            </h3>
            <p className="text-slate-600 text-base font-medium">
              {data?.address || "lorem ipsum dolor sit amet"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5 group/contact hover:bg-primary-50/50 rounded-2xl p-4 transition">
          <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 text-3xl shadow-sm group-hover/contact:scale-105 transition-transform">
            <FiPhone />
          </span>
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-1 tracking-wide">
              ফোন
            </h3>
            <p className="text-slate-600 text-base font-medium">
              {data?.phone_no || "+88016########"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5 group/contact hover:bg-primary-50/50 rounded-2xl p-4 transition">
          <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 text-3xl shadow-sm group-hover/contact:scale-105 transition-transform">
            <FiMail />
          </span>
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-1 tracking-wide">
              ইমেইল
            </h3>
            <p className="text-slate-600 text-base font-medium">
              {data?.email || "email@example.com"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
