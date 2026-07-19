"use client";

import { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa6";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="relative z-50">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 rounded-full flex items-center flex-col
          size-11 text-primary-900 shadow-md transition bg-secondary hover:bg-amber-300
          ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <FaAngleUp size={22} />
      </button>
    </div>
  );
};

export default BackToTop;
