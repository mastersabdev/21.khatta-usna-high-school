import Link from "next/link";
import { FaRegSadTear } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="page-card flex flex-col items-center max-w-md w-full mx-4 sm:p-10">
        <FaRegSadTear className="text-primary-300 text-5xl mb-4" />
        <h2 className="text-3xl font-bold text-slate-800 mb-2">
          ৪০৪ - পৃষ্ঠা পাওয়া যায়নি
        </h2>
        <p className="text-slate-500 mb-6 text-center">
          দুঃখিত, আপনি যে পৃষ্ঠাটি খুঁজছেন তা পাওয়া যায়নি।
        </p>
        <Link
          href="/"
          className="px-6 py-2.5 rounded-xl bg-primary-600 text-white font-semibold shadow-sm hover:bg-primary-700 transition-all duration-200"
        >
          হোমে ফিরে যান
        </Link>
      </div>
    </div>
  );
}
