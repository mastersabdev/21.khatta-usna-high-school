import SingleResultClient from "./components/SingleResultClient";

export const metadata = {
  title: "একক ফলাফল",
  description: "শিক্ষার্থীর একক পরীক্ষার ফলাফল দেখুন ও প্রিন্ট করুন",
};

export default function SingleResultPage() {
  const assetBaseUrl = (process.env.CAMPUSMASTER_BASE_URL || "").replace(
    /\/$/,
    "",
  );

  return <SingleResultClient assetBaseUrl={assetBaseUrl} />;
}
