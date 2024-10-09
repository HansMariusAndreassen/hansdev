import React from "react";
import useDelayedLoad from "../hooks/useDelayedLoad";

interface FadeInTextProps {
  text: string;
  delay?: number;
  fadeDuration?: number;
}

const FadeInText: React.FC<FadeInTextProps> = ({
  text,
  delay = 1000,
  fadeDuration = 500,
}) => {
  const opacity = useDelayedLoad(delay, fadeDuration);

  return (
    <div style={{ opacity, transition: `opacity ${fadeDuration}ms ease-in` }}>
      {text}
    </div>
  );
};

export default FadeInText;
