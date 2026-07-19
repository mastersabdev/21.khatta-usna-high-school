const ClassRoutineLoadingPage = () => {
  return (
    <main className="mt-4 lg:mt-8 container">
      {/* Title Skeleton */}
      <div className="mb-4">
        <div className="h-8 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg w-48 animate-pulse"></div>
      </div>

      {/* Description Skeleton */}
      <div className="mt-2">
        <div className="h-5 bg-slate-200 rounded-md w-96 animate-pulse"></div>
      </div>

      {/* Table Skeleton */}
      <div className="mt-8">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
          {/* Table Header Skeleton */}
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 border-b border-slate-200 px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-200 to-slate-300 animate-pulse"></div>
              <div className="space-y-2">
                <div className="h-5 bg-slate-200 rounded-md w-40 animate-pulse"></div>
                <div className="h-4 bg-slate-200 rounded-md w-64 animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Table Content Skeleton */}
          <div className="overflow-x-auto">
            <table className="w-full">
              {/* Table Header Row */}
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left py-4 px-6">
                    <div className="h-4 bg-slate-200 rounded-md w-24 animate-pulse"></div>
                  </th>
                  <th className="text-left py-4 px-6">
                    <div className="h-4 bg-slate-200 rounded-md w-16 animate-pulse"></div>
                  </th>
                  <th className="text-left py-4 px-6">
                    <div className="h-4 bg-slate-200 rounded-md w-28 animate-pulse"></div>
                  </th>
                  <th className="text-center py-4 px-6">
                    <div className="h-4 bg-slate-200 rounded-md w-20 mx-auto animate-pulse"></div>
                  </th>
                </tr>
              </thead>

              {/* Table Body Rows */}
              <tbody>
                {[...Array(8)].map((_, index) => (
                  <tr
                    key={index}
                    className={`hover:bg-slate-50/50 transition-colors duration-200 ${
                      index !== 7 ? "border-b border-slate-100" : ""
                    }`}
                  >
                    <td className="py-4 px-6">
                      <div className="h-4 bg-slate-200 rounded-md w-full animate-pulse"></div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100">
                        <div className="h-4 bg-slate-200 rounded-md w-16 animate-pulse"></div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="h-4 bg-slate-200 rounded-md w-24 animate-pulse"></div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center">
                          <div className="w-4 h-4 bg-slate-200 rounded animate-pulse"></div>
                        </div>
                        <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                          <div className="w-4 h-4 bg-slate-200 rounded animate-pulse"></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer Skeleton */}
          <div className="bg-slate-50 border-t border-slate-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="h-4 bg-slate-200 rounded-md w-32 animate-pulse"></div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-slate-300 animate-pulse"></div>
                <div className="h-4 bg-slate-200 rounded-md w-28 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Animation Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary-200 rounded-full animate-ping opacity-30"></div>
        <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-primary-200 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-emerald-200 rounded-full animate-bounce opacity-50"></div>
      </div>

      {/* Loading Indicator */}
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
            ক্লাস রুটিন লোড হচ্ছে...
          </span>
        </div>
      </div>
    </main>
  );
};

export default ClassRoutineLoadingPage;
