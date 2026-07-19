import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const ImportantLink = ({ data = [] }) => {
  const hasData = Array.isArray(data) && data.length > 0;

  return (
    <section className="page-card w-full h-full mx-auto">
      <h2 className="mb-5 text-center section-title">Important Links</h2>

      {hasData ? (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          {data.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center w-full justify-between rounded-xl border border-slate-200 bg-primary-50/50 p-3 text-primary-700 hover:border-primary-200 hover:bg-primary-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-200 transition-colors"
            >
              <span className="truncate font-medium">{link.title}</span>
              <span aria-hidden className="pl-3 text-primary-400">
                <FaExternalLinkAlt size={14} />
              </span>
            </Link>
          ))}
        </div>
      ) : (
        <div className="py-8 text-center text-slate-500">
          No important links available.
        </div>
      )}
    </section>
  );
};

export default ImportantLink;
