import Link from "next/link";

export default function Pagination({ page, hasPrev, hasNext, baseUrl }) {
  return (
    <div className="mt-8 flex items-center justify-between w-fit mx-auto gap-4">
      <Link
        href={`${baseUrl}?page=${Math.max(1, page - 1)}`}
        aria-disabled={!hasPrev}
        className={`btn inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900 ${
          !hasPrev ? "pointer-events-none opacity-50" : ""
        }`}
      >
        Prev
      </Link>
      <span className="text-sm text-slate-600">Page {page}</span>
      <Link
        href={`${baseUrl}?page=${page + 1}`}
        aria-disabled={!hasNext}
        className={`btn inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900 ${
          !hasNext ? "pointer-events-none opacity-50" : ""
        }`}
      >
        Next
      </Link>
    </div>
  );
}
