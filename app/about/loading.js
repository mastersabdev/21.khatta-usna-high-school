const Shimmer = ({ className = "" }) => (
  <div className={`animate-pulse rounded-md bg-slate-200/70 ${className}`} />
);

const AboutLoadingPage = () => {
  return (
    <section className="container mt-6 lg:mt-10 space-y-8">
      {/* Hero skeleton */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-50 via-white to-primary-50/50 p-6 sm:p-10 shadow-sm border border-slate-200/80">
        <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-primary-100/60 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-secondary/20 blur-3xl" />
        <div className="relative flex flex-col items-center">
          <Shimmer className="h-8 sm:h-10 w-3/4 max-w-xl" />
          <Shimmer className="mt-4 h-4 w-5/6 max-w-2xl" />
        </div>
      </section>

      {/* Key Information skeleton */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col items-center">
          <Shimmer className="h-6 w-56" />
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-slate-200/80" />
        </div>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {[...Array(4)].map((_, idx) => (
            <div
              key={idx}
              className="flex items-start justify-between rounded-xl border border-slate-200/70 bg-slate-50 p-4"
            >
              <Shimmer className="h-4 w-24" />
              <Shimmer className="h-4 w-36" />
            </div>
          ))}
        </div>
      </section>

      {/* Description skeleton */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-3">
        {[...Array(6)].map((_, i) => (
          <Shimmer
            key={i}
            className={`h-4 ${
              i % 3 === 0 ? "w-11/12" : i % 3 === 1 ? "w-10/12" : "w-9/12"
            }`}
          />
        ))}
      </section>
    </section>
  );
};

export default AboutLoadingPage;
