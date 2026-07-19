"use client";

import { createContactUs } from "@/services/contact-us";
import { useState } from "react";

const ContactForm = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await createContactUs(formData);
      if (response?.success) {
        setSuccess(true);
        form.reset();
      }
    } catch (error) {
      setError(error);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {error && (
        <div className="text-red-500">একটি সমস্যা হয়েছে: {error?.message}</div>
      )}
      <form className="space-y-4" onSubmit={onSubmit}>
        <div>
          <label htmlFor="name" className="block text-slate-700 mb-2">
            নাম *
          </label>
          <input
            name="name"
            type="text"
            id="name"
            className="w-full px-4 py-2 border border-slate-200 rounded-xl bg-slate-50/50 focus:outline-none focus:border-primary-300 focus:bg-white duration-300 transition"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-slate-700 mb-2">
            ইমেইল *
          </label>
          <input
            name="email"
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-slate-200 rounded-xl bg-slate-50/50 focus:outline-none focus:border-primary-300 focus:bg-white duration-300 transition"
            required
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-slate-700 mb-2">
            বিষয় *
          </label>
          <input
            name="subject"
            type="text"
            id="subject"
            className="w-full px-4 py-2 border border-slate-200 rounded-xl bg-slate-50/50 focus:outline-none focus:border-primary-300 focus:bg-white duration-300 transition"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-slate-700 mb-2">
            বার্তা *
          </label>
          <textarea
            name="message"
            id="message"
            rows="4"
            className="w-full px-4 py-2 border border-slate-200 rounded-xl bg-slate-50/50 focus:outline-none focus:border-primary-300 focus:bg-white duration-300 transition"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2.5 px-6 rounded-xl focus:outline-none duration-300 transition font-medium ${
            loading
              ? "bg-slate-300 cursor-not-allowed text-slate-500"
              : "bg-primary-600 text-white hover:bg-primary-700 shadow-sm"
          }`}
        >
          {loading ? "পাঠানো হচ্ছে..." : "পাঠান"}
        </button>
      </form>
      {success && (
        <div className="text-green-500 mt-2">
          আপনার বার্তা সফলভাবে পাঠানো হয়েছে!
        </div>
      )}
    </>
  );
};

export default ContactForm;
