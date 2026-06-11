"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../app/data";
import { FaGithub } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <section id="projects" className="py-20 bg-[#0a192f]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#e6f1ff] mb-12">/ projects</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/4">
            <ul className="space-y-2">
              {projects.map((project) => (
                <li key={project.title}>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className={`w-full text-left px-4 py-2 rounded-md transition-colors duration-300 ${
                      selectedProject.title === project.title
                        ? "bg-[#112240] text-[#64ffda] border-l-2 border-[#64ffda]"
                        : "text-[#8892b0] hover:bg-[#112240] hover:text-[#e6f1ff]"
                    }`}
                  >
                    {project.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-3/4">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProject.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-[#112240] p-6 rounded-lg border border-[#233554]"
              >
                <h3 className="text-xl font-bold text-[#e6f1ff]">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-[#a8b2d1] mt-1">
                  {selectedProject.category} &bull; {selectedProject.duration}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#233554] text-[#64ffda] text-xs font-semibold px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-[#8892b0] mt-4">{selectedProject.description}</p>
                <div className="mt-4">
                  <h4 className="font-semibold text-[#a8b2d1]">Key Features:</h4>
                  <ul className="list-disc list-inside text-[#8892b0] mt-2 space-y-1">
                    {selectedProject.keyFeatures.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center gap-4 mt-6">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#a8b2d1] hover:text-[#64ffda] transition-colors"
                  >
                    <FaGithub />
                    <span>GitHub</span>
                  </a>
                  {selectedProject.demo !== "Coming Soon" && (
                     <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[#a8b2d1] hover:text-[#64ffda] transition-colors"
                    >
                        <MdOpenInNew />
                        <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

