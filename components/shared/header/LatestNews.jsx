const LatestNews = ({ data }) => {
  // if (!data?.latest_news) return null;

  return (
    <div className="header-gradient overflow-hidden py-1.5 border-b border-white/15">
      <div className="container flex items-center gap-3">
        <div className="shrink-0 rounded-lg bg-secondary px-3 py-1 text-center text-xs font-bold text-primary-900 md:text-sm">
          সর্বশেষ সংবাদ
        </div>

        <div className="relative w-full overflow-hidden whitespace-nowrap header-news md:p-2 p-1.5">
          <div className="inline-flex animate-marquee hover:[animation-play-state:paused] cursor-pointer">
            <span className="mx-4 shrink-0 text-sm font-medium md:text-base">
              {data?.latest_news}
            </span>
            <span className="mx-4 shrink-0 text-sm font-medium md:text-base">
              {data?.latest_news}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
