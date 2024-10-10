"use client";

import React, { useState } from "react";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";

const skillsTree = {
  "Front End": {
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    inProgress: [],
  },
  "Back End": {
    skills: ["Discord.js"],
    inProgress: ["PostgreSQL", "Drizzle ORM"],
  },
  DevOps: {
    skills: ["Git", "GitHub", "GitHub Actions", "Figma", "Trello"],
    inProgress: ["Docker"],
  },
  "Content Management": {
    skills: ["Sanity", "Wordpress"],
    inProgress: [],
  },
};

type SkillCategoryProps = {
  category: string;
  skills: string[];
  inProgress: string[];
};

const SkillCategory = ({
  category,
  skills,
  inProgress,
}: SkillCategoryProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        className="flex items-center text-lg font-semibold mb-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <BiChevronDown size={20} /> : <BiChevronRight size={20} />}
        {category}
      </button>
      {isOpen && (
        <div className="ml-6">
          <h4 className="font-medium mb-2">Skills:</h4>
          <ul className="list-disc list-inside mb-2">
            {skills.map((skill, index) => (
              <li key={index} className="ml-4">
                {skill}
              </li>
            ))}
          </ul>
          {inProgress.length > 0 && (
            <>
              <h4 className="font-medium mb-2">In Progress:</h4>
              <ul className="list-disc list-inside">
                {inProgress.map((skill, index) => (
                  <li key={index} className="ml-4 text-gray-400">
                    {skill}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default function Skills() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">My Skills</h2>
        {Object.entries(skillsTree).map(
          ([category, { skills, inProgress }]) => (
            <SkillCategory
              key={category}
              category={category}
              skills={skills}
              inProgress={inProgress}
            />
          )
        )}
      </div>
    </section>
  );
}
