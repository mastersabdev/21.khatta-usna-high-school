import { cn } from "@/lib/utils";
import { FiImage } from "react-icons/fi";

const Empty = ({ title, description, className }) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm",
        className
      )}
    >
      <span className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-500 ring-1 ring-inset ring-slate-200">
        <FiImage className="text-xl" />
      </span>
      <h2 className="text-lg font-semibold text-slate-800">{title}</h2>
      <p className="mt-1 text-slate-600">{description}</p>
    </div>
  );
};

export default Empty;
