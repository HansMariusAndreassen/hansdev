"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      const currentRef = ref.current;
      if (currentRef) {
        observer.observe(currentRef);
      }

      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    }
  }, []);

  return (
    <section ref={ref} className="py-20 px-4">
      <div
        className={`max-w-4xl mx-auto transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <p className="text-lg mb-4">
          I am a passionate web developer with expertise in React, Next.js, and
          modern web technologies.
        </p>
        <p className="text-lg">
          My goal is to create beautiful, performant, and user-friendly web
          applications that solve real-world problems.
        </p>
      </div>
    </section>
  );
}
