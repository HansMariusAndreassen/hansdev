"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import FadeInText from "./FadeInText";

const ThreeBackground = dynamic(() => import("./Background"), { ssr: false });

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxStyle = (factor: number) => ({
    transform: `translateY(${scrollY * factor}px)`,
    transition: "transform 0.1s ease-out",
  });

  return (
    <div className="h-screen relative overflow-hidden">
      <ThreeBackground imageUrl="/portrait.jpeg" />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="text-center">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            style={parallaxStyle(-0.5)}
          >
            <FadeInText
              text="Hi, My name is Hans"
              delay={1500}
              fadeDuration={300}
            />
          </h1>
          <div
            className="text-xl md:text-2xl text-white px-2"
            style={parallaxStyle(-0.3)}
          >
            <FadeInText
              text="I'm a Front-End and web developer and I love to bring ideas to life"
              delay={4000}
              fadeDuration={300}
            />
          </div>
          <div
            className="text-xl md:text-2xl text-white p-2"
            style={parallaxStyle(-0.2)}
          >
            <FadeInText
              text="Feel free to browse my portfolio"
              delay={6500}
              fadeDuration={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
