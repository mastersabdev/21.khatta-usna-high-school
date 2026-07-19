import Link from "next/link";
import SocialFooter from "./SocialFooter";
import Image from "next/image";
import "@/styles/footer.css";

const Footer = ({ footerData }) => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <footer className="footer-gradient text-center text-white/85 lg:text-left relative pt-1">
      <SocialFooter socialLinks={footerData?.social_links} />

      <div className="border-b border-white/20 mx-auto w-full" />

      <div className="container mx-auto">
        <div className="py-10 text-center md:text-left">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] lg:place-content-between">
            {/* Logo & About */}
            <div className="footer-glass p-6 flex flex-col items-center md:items-start">
              <Image
                src={footerData?.image_url || "/images/common/placeholder.svg"}
                alt={footerData?.school_name || " Institution Name"}
                width={120}
                height={120}
                className="mb-4 rounded-full footer-logo shadow-lg"
              />
              <h6 className="mb-2 flex text-2xl items-center justify-center font-bold uppercase md:justify-start footer-title">
                {footerData?.school_name || " Institution Name"}
              </h6>
              <p className="text-white/75 italic text-base font-light">
                {footerData?.description || " School Motto"}
              </p>
            </div>
            {/* Useful links */}
            <div className="footer-glass p-6">
              <h6 className="mb-4 flex justify-center font-bold uppercase md:justify-start footer-title">
                Useful links
              </h6>
              <div className="flex flex-col gap-2 items-center md:items-start">
                {footerData?.useful_links &&
                  footerData.useful_links.map((link, index) => (
                    <Link
                      className="footer-link text-lg hover:underline underline-offset-2"
                      href={link.url}
                      key={index}
                    >
                      {link.name}
                    </Link>
                  ))}
              </div>
            </div>
            {/* Contact */}
            <div className="footer-glass p-6">
              <h6 className="mb-4 flex justify-center font-bold uppercase md:justify-start footer-title">
                Contact
              </h6>
              <div className="space-y-2">
                <p className="text-lg font-semibold footer-contact">
                  {footerData?.contact_info?.name || "Contact Person Name"}
                </p>
                <p className="text-sm footer-contact">
                  {footerData?.contact_info?.designation ||
                    " Contact person designation"}
                </p>
                <p className="text-sm footer-contact">
                  <a
                    href={`tel:${footerData?.contact_info?.phone}`}
                    className="footer-link hover:underline"
                  >
                    {footerData?.contact_info?.phone || " Contact Phone"}
                  </a>
                </p>
                <p className="text-sm footer-contact">
                  <a
                    href={`mailto:${footerData?.contact_info?.email}`}
                    className="footer-link hover:underline"
                  >
                    {footerData?.contact_info?.email || " Contact Email"}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Copyright */}
      <div className="footer-copyright py-4 text-center mt-4">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-2">
          <span>
            All Rights Reserved © 2026
            {new Date().getFullYear() > 2026 &&
              ` - ${new Date().getFullYear()}`}
            &nbsp;|&nbsp;Copyright:
            <a
              className="font-semibold ml-2 footer-link hover:underline"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              {footerData?.school_name || " Institution Name"}
            </a>
          </span>
          <span className="text-sm">
            Developed by:
            <a
              className="footer-link ml-1 hover:underline"
              href="https://mastersab.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Master Sab Ltd
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
