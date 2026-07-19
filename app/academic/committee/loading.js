const ManagingCommitteeLoading = () => {
  return (
    <main className="mt-4 lg:mt-8 container">
      {/* Title Skeleton */}
      <div className="mb-4">
        <div className="h-8 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg w-64 animate-pulse"></div>
      </div>

      {/* Description Skeleton */}
      <div className="mt-2">
        <div className="h-5 bg-slate-200 rounded-md w-80 animate-pulse"></div>
      </div>

      {/* Cards Grid Skeleton */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-md border border-slate-100 shadow-xl"
          >
            {/* Serial Number Badge Skeleton */}
            <div className="absolute top-4 left-4 z-10 w-10 h-10 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 animate-pulse"></div>

            {/* Image Section Skeleton */}
            <div className="aspect-[4/5] relative bg-gradient-to-br from-slate-100 to-slate-200 animate-pulse">
              {/* Avatar placeholder in center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-slate-300 animate-pulse"></div>
              </div>
            </div>

            {/* Content Section Skeleton */}
            <div className="p-6 space-y-3">
              {/* Name Skeleton */}
              <div className="space-y-2">
                <div className="h-5 bg-slate-200 rounded-md w-full animate-pulse"></div>
                <div className="h-5 bg-slate-200 rounded-md w-3/4 animate-pulse"></div>
              </div>

              {/* Designation Section Skeleton */}
              <div className="flex items-center gap-2 mt-4">
                <div className="w-8 h-0.5 bg-slate-300 rounded-full animate-pulse"></div>
                <div className="h-4 bg-slate-200 rounded-md w-24 animate-pulse"></div>
              </div>

              {/* Decorative Element Skeleton */}
              <div className="mt-4 flex justify-center">
                <div className="w-16 h-1 bg-slate-300 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Animation Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary-200 rounded-full animate-ping opacity-30"></div>
        <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-primary-200 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-sky-200 rounded-full animate-bounce opacity-50"></div>
      </div>
    </main>
  );
};

export default ManagingCommitteeLoading;
