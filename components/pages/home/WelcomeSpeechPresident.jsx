import WelcomeSpeechCard from "@/components/pages/home/WelcomeSpeechCard";
import { hasWelcomeSpeechData } from "@/utils/welcome-speech.util";

const WelcomeSpeechPresident = ({ data }) => {
  if (!hasWelcomeSpeechData(data)) return null;

  return <WelcomeSpeechCard data={data} imagePosition="right" />;
};

export default WelcomeSpeechPresident;
