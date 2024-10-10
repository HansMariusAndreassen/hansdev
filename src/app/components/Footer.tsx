import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-4">
            <a
              href="https://github.com/hansmariusandreassen"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/hans-marius-andreassen/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
        <div className="text-center text-sm">
          &copy; {currentYear} Hans Marius. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
