const TeacherLoading = () => {
  return (
    <main className="mt-4 lg:mt-8 container">
      {/* Title Skeleton */}
      <div className="mb-4">
        <div className="h-8 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg w-72 animate-pulse"></div>
      </div>

      {/* Description Skeleton */}
      <div className="mt-2">
        <div className="h-5 bg-slate-200 rounded-md w-80 animate-pulse"></div>
      </div>

      {/* Teachers Grid Skeleton */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8">
        {[...Array(12)].map((_, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-white to-gray-50/50 backdrop-blur-sm border border-white/60 rounded-3xl shadow-lg px-4 py-6 text-center relative overflow-hidden"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Background Pattern Skeleton */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50/30 via-transparent to-slate-100/30 animate-pulse"></div>

            <div className="relative z-10 space-y-4">
              {/* Profile Image Skeleton */}
              <div className="w-32 h-32 mx-auto rounded-full border-4 border-white shadow-xl mb-6 bg-gradient-to-br from-slate-200 to-slate-300 animate-pulse relative">
                {/* Avatar placeholder */}
                <div className="absolute inset-4 rounded-full bg-slate-400 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-slate-500 animate-pulse"></div>
                </div>
              </div>

              {/* Name Skeleton */}
              <div className="space-y-2">
                <div className="h-5 bg-slate-200 rounded-md w-3/4 mx-auto animate-pulse"></div>
                <div className="h-5 bg-slate-200 rounded-md w-1/2 mx-auto animate-pulse"></div>
              </div>

              {/* Designation Badge Skeleton */}
              <div className="flex justify-center">
                <div className="h-6 bg-slate-200 rounded-full w-24 animate-pulse"></div>
              </div>

              {/* Contact Info Skeleton */}
              <div className="space-y-2 mt-4">
                <div className="h-4 bg-slate-200 rounded-md w-5/6 mx-auto animate-pulse"></div>
                <div className="h-4 bg-slate-200 rounded-md w-4/6 mx-auto animate-pulse"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Animation Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-primary-200 rounded-full animate-ping opacity-30"></div>
        <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-primary-200 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-sky-200 rounded-full animate-bounce opacity-50"></div>
        <div
          className="absolute top-1/2 right-1/3 w-2 h-2 bg-purple-200 rounded-full animate-ping opacity-25"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Loading Text Indicator */}
      <div className="fixed bottom-8 right-8 bg-white/90 backdrop-blur-md border border-slate-200 rounded-full px-4 py-2 shadow-lg">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce"></div>
          <div
            className="w-2 h-2 bg-primary-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-2 h-2 bg-primary-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <span className="text-sm text-slate-600 ml-2">
            Loading teachers...
          </span>
        </div>
      </div>
    </main>
  );
};

export default TeacherLoading;
