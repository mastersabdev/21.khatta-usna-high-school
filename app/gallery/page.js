import { parsePagination } from "@/utils/paginationParser";
import { getGalleries } from "@/services/gallery";
import Pagination from "@/components/ui/Pagination";
import GalleryCard from "@/components/card/GalleryCard";
import Empty from "@/components/common/Empty";

export const metadata = {
  title: "গ্যালারি",
  description: "আমাদের বিদ্যালয়ের গ্যালারি সম্পর্কে বিস্তারিত তথ্য",
};

export default async function GalleryPage({ searchParams }) {
  const params = await searchParams;
  const page = params.page;
  const limit = 12;
  const data = await getGalleries(page, limit);
  const items = data.item ?? [];
  const pagination = parsePagination(data.meta ?? {});

  return (
    <section className="container pt-8 md:pt-10 pb-12">
      <header className="mb-6 md:mb-8">
        <h1 className="section-title py-2">গ্যালারি</h1>
        <p className="mt-1 text-slate-600">
          Moments from school life and events.
        </p>
      </header>

      {items.length === 0 ? (
        <Empty
          title="No galleries yet"
          description="Please check back later for updates."
        />
      ) : (
        <>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {items.map((g) => (
              <GalleryCard key={g.id} gallery={g} />
            ))}
          </ul>

          {/* Use the Pagination component */}
          {items.length >= limit && (
            <Pagination
              page={pagination.page}
              hasPrev={pagination.hasPrev}
              hasNext={pagination.hasNext}
              baseUrl="/gallery"
            />
          )}
        </>
      )}
    </section>
  );
}
