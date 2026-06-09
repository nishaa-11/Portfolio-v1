"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ImagePlaceholder() {
  return (
    <motion.div
      className="mb-6 flex justify-center md:justify-start"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Seamless container for profile image */}
      <div className="relative w-60 h-60 overflow-hidden group">
        <Image
          src="/profile.jpg" // Ensure the image is saved as profile.jpg in the public folder
          alt="Nisha B "
          fill
          className="object-cover"
          priority
        />
      </div>
    </motion.div>
  );
}


