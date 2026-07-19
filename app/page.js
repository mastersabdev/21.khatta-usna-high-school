import FadeIn from "@/components/animations/FadeIn";
import FadeInFromLeft from "@/components/animations/FadeInFromLeft";
import FadeInFromRight from "@/components/animations/FadeInFromRight";
import AboutUs from "@/components/pages/home/AboutUs";
import ImportantLink from "@/components/pages/home/ImportantLink";
import MainSlider from "@/components/pages/home/MainSlider";
import NoticeBoard from "@/components/pages/home/NoticeBoard";
import OurTeachers from "@/components/pages/home/OurTeachers";
import WelcomeSpeechHeadTeacher from "@/components/pages/home/WelcomeSpeechHeadTeacher";
import WelcomeSpeechPresident from "@/components/pages/home/WelcomeSpeechPresident";
import { getAboutUs } from "@/services/about-us";
import {
  getHeader,
  getImportantLinks,
  getNotices,
  getSliderImages,
  getWelcomeSpeeches,
} from "@/services/home";
import { hasWelcomeSpeechData } from "@/utils/welcome-speech.util";

export async function generateMetadata() {
  const headerData = await getHeader();
  const schoolName = headerData?.school_name || "School";

  return {
    title: schoolName,
    description: schoolName,
  };
}

const HomePage = async () => {
  const sliderImages = await getSliderImages();
  const notices = await getNotices();
  const importantLinksData = await getImportantLinks();
  const aboutUsData = await getAboutUs();
  const welcomeSpeeches = await getWelcomeSpeeches();
  const headTeacherData = welcomeSpeeches?.[0];
  const presidentData = welcomeSpeeches?.[1];
  const showHeadTeacher = hasWelcomeSpeechData(headTeacherData);
  const showPresident = hasWelcomeSpeechData(presidentData);

  return (
    <div className="container mt-4">
      <MainSlider sliderImages={sliderImages} />

      {(showHeadTeacher || showPresident) && (
        <div className="mt-8 grid grid-cols-1 gap-6">
          {showHeadTeacher && (
            <FadeInFromLeft>
              <WelcomeSpeechHeadTeacher data={headTeacherData} />
            </FadeInFromLeft>
          )}

          {showPresident && (
            <FadeInFromRight>
              <WelcomeSpeechPresident data={presidentData} />
            </FadeInFromRight>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 min-h-[300px]">
        <FadeInFromLeft>
          <ImportantLink data={importantLinksData} />
        </FadeInFromLeft>

        <FadeInFromRight>
          <NoticeBoard notices={notices} />
        </FadeInFromRight>
      </div>

      <FadeIn>
        <AboutUs data={aboutUsData} />
      </FadeIn>

      <OurTeachers />
    </div>
  );
};

export default HomePage;
