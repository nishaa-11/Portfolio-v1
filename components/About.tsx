"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const techStack = {
    frontend: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    backend: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
    ai: ["Python", "TensorFlow", "OpenCV", "Git"],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 px-6 md:px-12 lg:px-20 flex items-center justify-center bg-[#0a192f]">
      <div className="max-w-[1100px] w-full mt-10">
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold flex items-center whitespace-nowrap">
            <span className="text-[#64ffda] mr-2 font-mono text-xl md:text-2xl">/</span>
            <span className="text-[#e6f1ff]">about me</span>
          </h2>
          <div className="h-[1px] bg-[#233554] w-full max-w-[300px]" />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center"
        >
          {/* Content Left */}
          <div className="lg:col-span-3 space-y-6">
            <motion.p variants={itemVariants} className="text-[#8892b0] leading-relaxed text-lg">
              Hi, I'm <span className="text-[#64ffda]">Nisha</span>, a Computer Science student passionate about building meaningful digital experiences.
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-[#8892b0] leading-relaxed text-lg">
              I enjoy working across full-stack development, AI/ML, AR/VR, and product design. My goal is to create technology that combines creativity, usability, and real-world impact.
            </motion.p>

            <motion.p variants={itemVariants} className="text-[#8892b0] leading-relaxed text-lg">
              I love turning ideas into products, participating in hackathons, contributing to communities, and constantly learning new technologies.
            </motion.p>

            {/* Tech Stack Area */}
            <motion.div variants={itemVariants} className="pt-4">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                <div className="space-y-3">
                  <h4 className="text-[#e6f1ff] font-semibold text-sm uppercase tracking-widest border-b border-[#233554] pb-1 w-fit">Frontend</h4>
                  <ul className="space-y-2">
                    {techStack.frontend.map((tech) => (
                      <li key={tech} className="flex items-center gap-2 text-[#8892b0] text-sm md:text-base">
                        <span className="text-[#64ffda] text-xs">▹</span> {tech}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="text-[#e6f1ff] font-semibold text-sm uppercase tracking-widest border-b border-[#233554] pb-1 w-fit">Backend</h4>
                  <ul className="space-y-2">
                    {techStack.backend.map((tech) => (
                      <li key={tech} className="flex items-center gap-2 text-[#8892b0] text-sm md:text-base">
                        <span className="text-[#64ffda] text-xs">▹</span> {tech}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="text-[#e6f1ff] font-semibold text-sm uppercase tracking-widest border-b border-[#233554] pb-1 w-fit">AI & Tools</h4>
                  <ul className="space-y-2">
                    {techStack.ai.map((tech) => (
                      <li key={tech} className="flex items-center gap-2 text-[#8892b0] text-sm md:text-base">
                        <span className="text-[#64ffda] text-xs">▹</span> {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.p variants={itemVariants} className="text-[#8892b0] leading-relaxed text-lg pt-4">
              Outside of coding, I enjoy  design, emerging technology, gaming, and exploring ideas that sit at the intersection of technology and creativity.
            </motion.p>
          </div>

          {/* Profile Image Right */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-2 flex justify-center lg:justify-end"
          >
            <div className="relative group max-w-[300px] md:max-w-sm lg:max-w-md">
              {/* Border overlap effect */}
              <div className="absolute -inset-4 border-2 border-[#233554] rounded-2xl transform translate-x-3 translate-y-3 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform duration-300" />
              
              <div className="relative overflow-hidden rounded-[16px] border border-[#233554] bg-[#112240]">
                <Image
                  src="/aboutprofile.jpg"
                  alt="Nisha's Profile"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover grayscale md:grayscale-0 transition-all duration-300 hover:scale-[1.02]"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
