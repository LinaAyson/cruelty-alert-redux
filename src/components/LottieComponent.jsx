import Lottie from "lottie-react";
import animalpaws from "../assets/animations/animalpaws.json";

export const LottieComponent = () => {
  return <Lottie animationData={animalpaws} className="h-32" />;
};
