import { IoIosCall, IoMdMail } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import "@/styles/header.css";

const HeaderTopSection = ({ data }) => {
  return (
    <div className="header-gradient">
      <div className="container py-2 flex flex-col md:flex-row items-center justify-between md:gap-4 gap-2">
        <div className="flex gap-4 items-center header-glass p-2.5 max-md:w-full">
          <Image
            className="rounded-full header-logo max-w-[60px] md:max-w-[90px] shadow-lg"
            src={data?.image_url || "/images/common/placeholder.svg"}
            alt="Logo"
            width={100}
            height={100}
            quality={100}
            priority
          />
          <div>
            <h3 className="lg:text-3xl text-xl font-bold header-title md:mb-1 max-md:leading-tight">
              {data?.school_name || "School Name"}
            </h3>
            <p className="font-medium header-contact text-sm md:text-base">
              {data?.address || "School Address"}
            </p>
            <p className="font-medium header-contact text-xs md:text-sm opacity-80">
              {data?.school_code || "School Code"}
            </p>
          </div>
        </div>

        <div className="flex flex-col md:items-end md:gap-2 gap-1 header-glass md:p-3 p-2 max-md:w-full">
          {data?.phone_no && (
            <p className="flex items-center gap-2 text-sm md:text-lg font-medium header-contact">
              <IoIosCall className="text-xl" />
              <Link
                className="header-link hover:underline"
                href={`tel:${data?.phone_no}`}
              >
                {data?.phone_no || "Phone Number"}
              </Link>
            </p>
          )}
          {data?.email && (
            <p className="flex items-center gap-2 text-sm md:text-lg font-medium header-contact">
              <IoMdMail />
              <Link
                className="header-link hover:underline"
                href={`mailto:${data?.email}`}
              >
                {data?.email || "Email Address"}
              </Link>
            </p>
          )}
        </div>
      </div>
      <div className="border-b border-white/20" />
    </div>
  );
};

export default HeaderTopSection;
