"use client";

import { FaExclamationTriangle } from "react-icons/fa";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body className="min-h-screen flex items-center justify-center bg-[#f8fafc]">
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-10 flex flex-col items-center max-w-md w-full mx-4">
          <FaExclamationTriangle className="text-red-400 text-5xl mb-4" />
          <h2 className="text-2xl font-bold text-slate-800 mb-2">
            কিছু একটা ভুল হয়েছে!
          </h2>
          <p className="text-slate-500 mb-6 text-center">
            দুঃখিত, অনুগ্রহ করে আবার চেষ্টা করুন।
          </p>
          <button
            onClick={() => reset()}
            className="px-6 py-2.5 rounded-xl bg-primary-600 text-white font-semibold shadow-sm hover:bg-primary-700 transition-all duration-200"
          >
            আবার চেষ্টা করুন
          </button>
        </div>
      </body>
    </html>
  );
}
