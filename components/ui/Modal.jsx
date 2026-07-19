"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { createPortal } from "react-dom";

const Modal = ({ isOpen, onClose, children, maxWidth = "max-w-3xl" }) => {
  const [show, setShow] = useState(isOpen);
  const [closing, setClosing] = useState(false);

  // Handle open/close transitions
  useEffect(() => {
    if (isOpen) {
      setShow(true);
      setClosing(false);
    } else if (show) {
      setClosing(true);
      const timer = setTimeout(() => {
        setShow(false);
        setClosing(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!show) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center px-4 bg-black/60 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className={clsx(
          "relative bg-white rounded-lg shadow-lg w-full p-4 transform transition-all duration-300 ease-out",
          maxWidth,
          closing
            ? "animate-[modalOut_0.9s_forwards]"
            : "animate-[modalIn_0.3s_forwards]"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl font-bold"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>

        {children}
      </div>

      {/* Tailwind keyframes */}
      <style jsx>{`
        @keyframes modalIn {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes modalOut {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(0.95);
          }
        }
      `}</style>
    </div>,
    document.body
  );
};

export default Modal;
