"use client";

import React, { useState } from "react";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import { FaCode, FaDatabase, FaTools, FaPencilAlt } from "react-icons/fa";

const skillsTree = {
  "Front End": {
    icon: <FaCode size={24} className="text-blue-500" />,
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Bootstrap",
      "shadcn/ui",
    ],
    inProgress: [],
  },
  "Back End": {
    icon: <FaDatabase size={24} className="text-green-500" />,
    skills: ["Discord.js"],
    inProgress: ["PostgreSQL", "Drizzle ORM"],
  },
  DevOps: {
    icon: <FaTools size={24} className="text-yellow-500" />,
    skills: ["Git", "GitHub", "GitHub Actions", "Figma", "Trello"],
    inProgress: ["Docker"],
  },
  "Content Management": {
    icon: <FaPencilAlt size={24} className="text-pink-500" />,
    skills: ["Sanity", "Wordpress"],
    inProgress: [],
  },
};

type SkillCategoryProps = {
  category: string;
  skills: string[];
  inProgress: string[];
  icon: JSX.Element;
};

const SkillCategory = ({
  category,
  skills,
  inProgress,
  icon,
}: SkillCategoryProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6 bg-white p-4 rounded-lg shadow-lg">
      <button
        className="flex items-center text-xl font-semibold mb-2 transition-all hover:text-primary"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <BiChevronDown size={24} /> : <BiChevronRight size={24} />}
        <span className="ml-2 flex items-center">
          {icon} <span className="ml-2">{category}</span>
        </span>
      </button>
      {isOpen && (
        <div className="ml-6 transition-all">
          <h4 className="font-medium mb-2 text-primary">Skills:</h4>
          <ul className="flex flex-wrap gap-2 mb-4">
            {skills.map((skill, index) => (
              <li
                key={index}
                className="bg-blue-100 text-primary px-3 py-2 rounded-lg text-sm"
              >
                {skill}
              </li>
            ))}
          </ul>
          {inProgress.length > 0 && (
            <>
              <h4 className="font-medium mb-2 text-primary">In Progress:</h4>
              <ul className="flex flex-wrap gap-2">
                {inProgress.map((skill, index) => (
                  <li
                    key={index}
                    className="bg-secondary text-primary px-3 py-2 rounded-lg text-sm"
                  >
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
    <section className="py-20 px-4 bg-secondary text-primary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">My Skills</h2>
        <div className="grid grid-cols-1 gap-6">
          {Object.entries(skillsTree).map(
            ([category, { skills, inProgress, icon }]) => (
              <SkillCategory
                key={category}
                category={category}
                skills={skills}
                inProgress={inProgress}
                icon={icon}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
