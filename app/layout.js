import { Geist, Geist_Mono, Anek_Bangla, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/header/Header";
import Footer from "@/components/shared/footer/Footer";
import { getFooter, getHeader } from "@/services/home";
import PageTransition from "@/components/animations/PageTransition";
import BackToTop from "@/components/common/BackToTop";

const anek_bangla = Anek_Bangla({
  variable: "--font-anek-bangla",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export default async function RootLayout({ children }) {
  const headerData = await getHeader();
  const footerData = await getFooter();
  return (
    <html lang="en">
      <body
        className={`${anek_bangla.variable} ${roboto.variable} antialiased bg-background`}
      >
        {/* <SplashLoader> */}
        <Header headerData={headerData} />
        <main className="w-full bg-background relative overflow-hidden">
          <div
            className="absolute inset-0 z-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #e2e8f0 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />
          <PageTransition>
            <div className="min-h-[calc(100vh-467px)] pb-12 md:pb-24 z-10 relative">
              {children}
            </div>
          </PageTransition>
          <BackToTop />
          <Footer footerData={footerData} />
        </main>
        {/* </SplashLoader> */}
      </body>
    </html>
  );
}
