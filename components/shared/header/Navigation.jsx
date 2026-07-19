"use client";

import { useState } from "react";
import NavLink from "./NavLink";
import { FiMenu, FiX } from "react-icons/fi";
import { navItems } from "./navItems";
import "@/styles/header.css";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="py-2 header-gradient sticky top-0 z-30 shadow-md">
      <nav className="container">
        <ul className="flex w-fit gap-2 max-lg:hidden">
          {navItems.map((item) => (
            <NavLink key={item.label} item={item} />
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <div className="flex justify-end items-center lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white text-2xl rounded-lg hover:bg-white/15 transition-colors p-1"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
        <ul
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden
    ${
      isMenuOpen
        ? "mt-2 flex flex-col gap-2 header-glass text-white p-4 rounded-lg shadow-md max-h-[500px] opacity-100"
        : "max-h-0 opacity-0"
    }`}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              item={item}
              onClick={() => setIsMenuOpen(false)}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
