import Image from "next/image";
import HeaderTopSection from "./HeaderTopSection";
import LatestNews from "./LatestNews";
import Navigation from "./Navigation";

const Header = ({ headerData }) => {
  return (
    <>
      {headerData?.header_image_url ? (
        <div className="bg-primary-500 relative">
          <div className="container h-auto">
            <Image
              className="h-auto w-full object-cover"
              src={headerData?.header_image_url}
              alt="header image"
              width={1080}
              height={50}
              quality={100}
            />
            <div className="absolute inset-0 bg-primary-500/50 -z-10"></div>
          </div>
        </div>
      ) : (
        <HeaderTopSection data={headerData} />
      )}

      <Navigation />
      <LatestNews data={headerData} />
    </>
  );
};

export default Header;
