"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.section
      id="home"
      className="min-h-screen w-full flex flex-col justify-center px-6 md:px-12 lg:px-20 max-w-[1100px] mx-auto py-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-xl">
        <ImagePlaceholder />

        {/* Main Heading */}
        <motion.div variants={itemVariants} className="mb-2">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-space font-bold leading-tight">
            <span className="text-[#e6f1ff]">hi, </span>
            <span className="text-[#64ffda]">nisha</span>
            <span className="text-[#e6f1ff]"> here ! </span>
            <span className="text-[#64ffda] inline-block w-[3px] h-10 md:h-12 lg:h-14 ml-1 blink-cursor align-middle" />
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-3xl lg:text-4xl font-space text-[#a8b2d1] mb-5"
        >
          I create stuff sometimes.
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-sm md:text-base text-[#8892b0] leading-relaxed mb-8 max-w-[550px]"
        >
          Engineering student passionate about AI, AR/VR, full-stack development, and building products that blend creativity with technology.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="mailto:nishabinukumar11@gmail.com"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-7 py-3.5 border border-[#64ffda] rounded font-space text-sm text-[#64ffda] hover:bg-[#64ffda]/10 transition-all duration-300 flex items-center gap-2.5 w-fit cursor-pointer"
        >
          <Mail size={16} />
          <span>Say hello</span>
        </motion.a>
      </div>
    </motion.section>
  );
}
