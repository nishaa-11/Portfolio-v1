"use client";

import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 md:px-12 lg:px-20 flex items-center justify-center bg-[#0a192f]">
      <div className="max-w-[1100px] w-full">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold flex items-center whitespace-nowrap">
            <span className="text-[#64ffda] mr-2 font-mono text-xl md:text-2xl">/</span>
            <span className="text-[#e6f1ff]">projects</span>
          </h2>
          <div className="h-[1px] bg-[#233554] w-full max-w-[300px]" />
        </motion.div>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-[#8892b0] text-lg"
        >
          <p>Projects section coming soon...</p>
        </motion.div>
      </div>
    </section>
  );
}
