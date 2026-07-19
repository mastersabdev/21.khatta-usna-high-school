import WelcomeSpeechCard from "@/components/pages/home/WelcomeSpeechCard";
import { hasWelcomeSpeechData } from "@/utils/welcome-speech.util";

const WelcomeSpeechHeadTeacher = ({ data }) => {
  if (!hasWelcomeSpeechData(data)) return null;

  return <WelcomeSpeechCard data={data} imagePosition="left" />;
};

export default WelcomeSpeechHeadTeacher;
