"use client";

import React from "react";
import dynamic from "next/dynamic";
import FadeInText from "./FadeInText";

const ThreeBackground = dynamic(() => import("./Background"), { ssr: false });

export default function Hero() {
  const imgs = [
    "/portrait.jpeg",
    "/avatar.jpg",
    "homeOffice.jpeg",
    "/homeOffice2.jpeg",
    "max.jpg",
    "pondering.jpeg",
  ];

  return (
    <div className="h-screen sticky top-0 overflow-hidden">
      <ThreeBackground imageUrls={imgs} />
      <div className="absolute inset-0 flex items-center justify-center bg-opacity-50">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            <FadeInText
              text="Hi, My name is Hans"
              delay={1500}
              fadeDuration={300}
            />
          </h1>
          <div className="text-xl md:text-2xl text-white px-2">
            <FadeInText
              text="I'm a Front-End and web developer"
              delay={4000}
              fadeDuration={300}
            />
          </div>
          <div className="text-xl md:text-2xl text-white p-2">
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
