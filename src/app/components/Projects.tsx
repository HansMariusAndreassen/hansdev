"use client";

import Link from "next/link";
import { useState } from "react";
import { FaFolder, FaFolderOpen } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Haugesund Karateklubb",
    description:
      "A simple website made for Haugesund Karateklubb. The did not have a home page so I gifted them one.",
    link: "https://haugesundkarate.no",
  },
  {
    id: 2,
    title: "Havens",
    description: "A booking website.",
    link: "https://project-havens.netlify.app/",
  },
  {
    id: 3,
    title: "Not-Pong",
    description: "A simplistic game built with Flutter",
    link: "https://github.com/Spookyrumble/Flutter-game",
  },
  {
    id: 4,
    title: "Adling",
    description: "A discord bot",
    link: "https://github.com/Spookyrumble/AdLing",
  },
  {
    id: 5,
    title: "Cyberstore",
    description: "E-commerce website",
    link: "https://areactecom.netlify.app/",
  },
  {
    id: 6,
    title: "OnlyPineapples",
    description: "An auction house (the name was a joke)",
    link: "https://hma-sp2-onlypineapples.netlify.app/",
  },
  {
    id: 7,
    title: "Connotation",
    description: "SoMe app",
    link: "https://css-framework-js2.netlify.app/",
  },
  {
    id: 8,
    title: "Inside the trip",
    description: "Travel blog",
    link: "https://github.com/HansMariusAndreassen/project-exam-1",
  },
  {
    id: 9,
    title: "Community science museum",
    description: "Website",
    link: "https://github.com/Spookyrumble/Semester_project1",
  },
  {
    id: 10,
    title: "Rainydays",
    description: "E-commerce",
    link: "https://github.com/HMAsp/HTML-CSS_CA_HMA_2022",
  },
];

export default function Projects() {
  return (
    <section className="py-20 px-4 bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-white">My Projects</h2>
        <ProjectTree projects={projects} />
      </div>
    </section>
  );
}

type Project = {
  id: number;
  title: string;
  description: string;
  link: string;
};

type ProjectTreeProps = {
  projects: Project[];
};

function ProjectTree({ projects }: ProjectTreeProps) {
  return (
    <ul className="space-y-4">
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </ul>
  );
}

type ProjectItemProps = {
  project: Project;
};

function ProjectItem({ project }: ProjectItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="text-white">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex items-center space-x-2 p-2 rounded-md bg-gray-700 hover:bg-gray-600"
      >
        {isOpen ? <FaFolderOpen /> : <FaFolder />}
        <span className="font-semibold">{project.title}</span>
      </div>
      {isOpen && (
        <div className="ml-6 mt-2 bg-gray-700 p-4 rounded-md space-y-2">
          <p className="mb-2">{project.description}</p>
          <Link className="hover:underline" href={project.link}>
            {project.link}
          </Link>
        </div>
      )}
    </li>
  );
}
