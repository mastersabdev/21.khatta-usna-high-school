const Table = ({ columns, data }) => {
  return (
    <div className="relative overflow-hidden rounded-lg bg-white/90 backdrop-blur-sm shadow-lg ring-1 ring-slate-200/60">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
      
      <div className="relative overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-primary-50 via-slate-50 to-primary-50 border-b border-slate-200/70">
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="px-6 py-3 text-left text-sm font-semibold text-slate-700 tracking-wide first:rounded-tl-2xl last:rounded-tr-2xl"
                >
                  {col.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100/80">
            {data?.length > 0 ? (
              data.map((row, idx) => (
                <tr
                  key={row.id || idx}
                  className="group hover:bg-primary-50/50 transition-all duration-300 ease-out"
                >
                  {columns.map((col) => (
                    <td
                      key={col.key}
                      className="px-6 py-2 text-sm text-slate-600 group-hover:text-slate-800 transition-colors duration-300"
                    >
                      {col.render ? col.render(row, idx) : row[col.dataIndex]}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="text-center py-16 text-slate-500 bg-gradient-to-br from-slate-50/50 to-white/80"
                >
                  <div className="flex flex-col items-center space-y-4">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full flex items-center justify-center shadow-sm">
                        <svg
                          className="w-10 h-10 text-slate-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-slate-300 rounded-full opacity-60" />
                    </div>
                    <div className="space-y-1">
                      <span className="block font-medium text-slate-600">কোন তথ্য পাওয়া যায়নি</span>
                      <span className="block text-xs text-slate-400">এই মুহূর্তে কোন ডেটা উপলব্ধ নেই</span>
                    </div>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
