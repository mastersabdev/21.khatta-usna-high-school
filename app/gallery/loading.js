export default function Loading() {
  return (
    <section className="container pt-8 md:pt-10 pb-12">
      <div className="mb-6 md:mb-8">
        <div className="h-7 md:h-9 w-40 bg-slate-200 rounded animate-pulse" />
        <div className="mt-2 h-4 w-72 bg-slate-100 rounded animate-pulse" />
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <li
            key={i}
            className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
          >
            <div className="h-44 md:h-48 w-full bg-slate-100 animate-pulse" />
            <div className="p-3 md:p-4">
              <div className="h-4 w-3/4 bg-slate-100 rounded animate-pulse" />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
