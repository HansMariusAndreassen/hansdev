import { useState, useEffect } from "react";

const useDelayedLoad = (delay: number = 1000, fadeDuration: number = 500) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      const fadeTimer = setInterval(() => {
        setOpacity((prevOpacity) => {
          if (prevOpacity >= 1) {
            clearInterval(fadeTimer);
            return 1;
          }
          return prevOpacity + 0.1;
        });
      }, fadeDuration / 10);
    }, delay);

    return () => {
      clearTimeout(delayTimer);
    };
  }, [delay, fadeDuration]);

  return opacity;
};

export default useDelayedLoad;
