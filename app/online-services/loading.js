function Shimmer({ className = "" }) {
    return <div className={`animate-pulse rounded-md bg-slate-200/70 ${className}`} />;
}

export default function OnlineServicesLoading() {
    return (
        <section className="py-12 min-h-[60vh]">
            <div className="container">
                <Shimmer className="h-10 w-64 mx-auto mb-10" />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="flex flex-col items-center justify-center rounded-2xl border border-slate-100 bg-white/90 shadow-sm p-7 min-h-[180px]">
                            <Shimmer className="mb-2 w-10 h-10 rounded-full" />
                            <Shimmer className="h-5 w-32 mb-2" />
                            <Shimmer className="h-4 w-40" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}