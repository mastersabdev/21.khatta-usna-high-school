"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import RenderChildren from "./RenderChildren";
import { FaAngleDown } from "react-icons/fa6";

const NavLink = ({ item, onClick }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isParentActive =
    pathname === item.path ||
    item.children?.some(
      (c) =>
        pathname.startsWith(c.path) ||
        c.children?.some((s) => pathname.startsWith(s.path))
    );

  const handleClick = (e) => {
    if (item.children) {
      // prevent page navigation if parent has children
      e.preventDefault();
      setIsOpen((prev) => !prev);
    } else {
      onClick?.();
    }
  };

  return (
    <div
      className="relative z-10 md:max-w-[180px] max-md:w-[16rem]"
      onMouseEnter={() => !isMobile() && setIsOpen(true)}
      onMouseLeave={() => !isMobile() && setIsOpen(false)}
    >
      <Link
        href={item.path}
        onClick={handleClick}
        target={item.openInNewTab ? "_blank" : "_self"}
        rel={item.openInNewTab ? "noopener noreferrer" : undefined}
        className={cn(
          "header-link flex gap-2 items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-white/15 hover:text-secondary",
          isParentActive ? "text-secondary! bg-white/15 shadow-sm font-semibold" : ""
        )}
      >
        {item.label}{" "}
        {item.children && (
          <FaAngleDown
            className={cn(
              "transition-transform duration-200",
              isOpen && "rotate-180"
            )}
          />
        )}
      </Link>

      {item.children && (
        <div
          className={cn(
            "transition-all duration-300 lg:absolute lg:top-[85%] lg:left-10 mt-1",
            isOpen
              ? "opacity-100 translate-y-0 max-h-[500px]"
              : "opacity-0 -translate-y-2 max-h-0 overflow-hidden"
          )}
        >
          <RenderChildren items={item.children} pathname={pathname} />
        </div>
      )}
    </div>
  );
};

// quick helper to detect mobile viewport
function isMobile() {
  return typeof window !== "undefined" && window.innerWidth < 1024;
}

export default NavLink;
