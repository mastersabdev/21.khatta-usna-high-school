import ManagingCommitteeCard from "@/components/card/ManagingCommitteeCard";
import Empty from "@/components/common/Empty";
import { getManagingCommittees } from "@/services/academic";

export const metadata = {
  title: "ব্যবস্থাপনা কমিটি",
  description: "আমাদের বিদ্যালয়ের ব্যবস্থাপনা কমিটি সম্পর্কে বিস্তারিত তথ্য",
};

const CommitteePage = async () => {
  const committees = await getManagingCommittees();
  return (
    <main className="mt-4 lg:mt-8 container">
      <h2 className="section-title mb-4">ব্যবস্থাপনা কমিটি</h2>
      <p className="text-slate-500 mt-2 text-sm sm:text-base">
        কমিটির সদস্যদের সাথে পরিচিত হন
      </p>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8">
        {committees && committees?.length > 0 ? (
          committees.map((committee) => (
            <ManagingCommitteeCard key={committee?.id} committee={committee} />
          ))
        ) : (
          <Empty
            className={"col-span-full"}
            title="No data yet!"
            description="Please check back later for updates."
          />
        )}
      </div>
    </main>
  );
};

export default CommitteePage;
