import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa6";

const RenderChildren = ({ items, pathname, level = 1 }) => {
  return (
    <div
      className={cn(
        "p-2 bg-primary backdrop-blur-sm shadow-lg rounded-xl border border-slate-200 gap-1",
        level > 1 ? "flex-col shadow-lg pl-4" : "flex-row"
      )}
    >
      {items.map((child) => {
        const isActive = pathname === child.path;
        const hasSub = child.children && child.children.length > 0;

        return (
          <div key={child.label} className="relative group">
            <Link
              href={child.path}
              className={cn(
                "header-link flex gap-2 items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-primary-50 hover:text-primary-700 w-full whitespace-nowrap",
                isActive ? "text-primary-700! bg-primary-50 shadow-sm font-semibold" : ""
              )}
            >
              {child.label} {hasSub && <FaAngleDown className="text-xs" />}
            </Link>

            {hasSub && (
              <div className="absolute top-0 left-[95%] ml-2 hidden group-hover:flex transition-all duration-200">
                <RenderChildren
                  items={child.children}
                  pathname={pathname}
                  level={level + 1}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default RenderChildren;
