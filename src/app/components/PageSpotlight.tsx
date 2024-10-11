"use client";

import React, { useState, useEffect } from "react";

const PageSpotlight = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <div
        className={`fixed inset-0 pointer-events-none z-40 transition-colors duration-300 ${
          isDarkMode ? "bg-black" : "bg-transparent"
        }`}
        style={{
          background: isDarkMode
            ? `radial-gradient(circle 300px at ${position.x}px ${position.y}px, 
               rgba(255, 255, 255, 0.1) 0%, 
               rgba(0, 0, 0, 0.8) 80%)`
            : `radial-gradient(circle 300px at ${position.x}px ${position.y}px, 
               transparent 50%, 
               rgba(1, 1, 1, 0.0) 0%)`,
        }}
      />
      <button
        onClick={toggleDarkMode}
        className={`fixed bottom-5 right-5 z-50 p-2 rounded-full shadow-lg
                    ${
                      isDarkMode
                        ? "bg-primary text-yellow-300"
                        : "bg-primary text-gray-800"
                    }`}
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? "☀️" : "🌙"}
      </button>
    </>
  );
};

export default PageSpotlight;
