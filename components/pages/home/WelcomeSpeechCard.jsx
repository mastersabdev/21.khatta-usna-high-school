import Image from "next/image";

const WelcomeSpeechCard = ({ data, imagePosition = "left" }) => {
  const isImageRight = imagePosition === "right";

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md md:p-8">
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary-100 blur-2xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-secondary/20 blur-2xl"
        aria-hidden
      />

      <div
        className={`relative flex flex-col gap-8 md:items-center ${
          isImageRight ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <div className="flex shrink-0 flex-col items-center md:w-[220px] lg:w-[260px]">
          <div className="relative">
            <div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/30 blur-md"
              aria-hidden
            />
            <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-white shadow-md ring-2 ring-primary-100 transition-all duration-300 group-hover:ring-primary-200 lg:h-48 lg:w-48">
              <Image
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                src={data.image_url}
                width={450}
                height={450}
                draggable={false}
                alt={data.name}
              />
            </div>
          </div>

          <h2 className="mt-5 text-center text-lg font-bold text-slate-800">
            {data.name}
          </h2>
          {data.designation && (
            <p className="mt-2 rounded-full bg-primary-50 px-4 py-1.5 text-center text-xs font-semibold text-primary-700">
              {data.designation}
            </p>
          )}
        </div>

        <div className="relative min-w-0 flex-1">
          <div className="mb-4 flex items-center gap-3">
            <span
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-2xl leading-none text-primary-700"
              aria-hidden
            >
              &ldquo;
            </span>
            <h3 className="section-title">Welcome Speech</h3>
          </div>

          <p className="text-justify leading-relaxed text-slate-600 md:text-base">
            {data.speech}
          </p>
        </div>
      </div>
    </article>
  );
};

export default WelcomeSpeechCard;
