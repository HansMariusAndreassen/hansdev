"use client";

import { useEffect, useRef, useState } from "react";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "GraphQL",
  "Tailwind CSS",
];

export default function Skills() {
  const [visibleSkills, setVisibleSkills] = useState<number[]>([]);
  const skillRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillIndex = Number(
              entry.target.getAttribute("data-skill-index")
            );
            setVisibleSkills((prev) => [...prev, skillIndex]);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRefs = skillRefs.current.slice();

    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">My Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <li
              key={index}
              ref={(el) => {
                skillRefs.current[index] = el;
              }}
              data-skill-index={index}
              className={`bg-gray-700 p-4 rounded-lg text-center transition-opacity duration-1000 ${
                visibleSkills.includes(index) ? "opacity-100" : "opacity-0"
              }`}
            ></li>
          ))}
        </ul>
      </div>
    </section>
  );
}
