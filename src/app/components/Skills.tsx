"use client";

import React, { useState } from "react";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import {
  FaCode,
  FaDatabase,
  FaTools,
  FaPencilAlt,
  FaProjectDiagram,
  FaFirefoxBrowser,
} from "react-icons/fa";
import { IoAccessibility } from "react-icons/io5";

const skillsTree = {
  "Front End": {
    icon: <FaCode size={24} className="text-blue-500" />,
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "shadcn/ui",
      "SASS/SCSS",
      "Responsive Design",
    ],
    inProgress: ["Three.js"],
  },
  "Web APIs & Performance": {
    icon: <FaFirefoxBrowser size={24} className="text-orange-500" />,
    skills: [
      "DOM Manipulation",
      "Fetch API",
      "Local Storage",
      "Web Performance Optimization",
    ],
    inProgress: [],
  },
  "Testing & Debugging": {
    icon: <FaTools size={24} className="text-red-500" />,
    skills: ["Chrome DevTools", "Jest", "Cypress"],
    inProgress: ["React Testing Library"],
  },
  "Accessibility & SEO": {
    icon: <IoAccessibility size={24} className="text-purple-500" />,
    skills: ["WCAG Guidelines", "Semantic HTML"],
    inProgress: ["ARIA", "SEO Best Practices"],
  },
  "Version Control & DevOps": {
    icon: <FaTools size={24} className="text-yellow-500" />,
    skills: ["Git", "GitHub", "GitHub Actions", "Figma", "Trello", "npm/pnpm"],
    inProgress: ["Docker"],
  },
  "Content Management": {
    icon: <FaPencilAlt size={24} className="text-pink-500" />,
    skills: ["Sanity", "Wordpress"],
    inProgress: [],
  },
  "Project Management": {
    icon: <FaProjectDiagram size={24} className="text-purple-500" />,
    skills: ["Scrum", "Agile"],
    inProgress: [],
  },
  "Back End": {
    icon: <FaDatabase size={24} className="text-green-500" />,
    skills: ["Discord.js", "API-REST"],
    inProgress: ["PostgreSQL", "Drizzle ORM"],
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
