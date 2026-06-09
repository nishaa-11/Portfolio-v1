"use client";

import { motion } from "framer-motion";
import { Mail, Link } from "lucide-react";

export default function SocialLinks() {
  const socials = [
    {
      icon: Mail,
      href: "mailto:nishabinukumar11@gmail.com",
      label: "Email",
    },
    {
      icon: Link,
      href: "https://github.com/nishaa-11",
      label: "GitHub",
    },
    {
      icon: Link,
      href: "https://www.linkedin.com/in/nininisha/",
      label: "LinkedIn",
    },
  ];

  return (
    <motion.div
      className="fixed bottom-8 left-8 z-40 hidden md:flex flex-col gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="flex flex-col gap-5 items-center">
        {socials.map((social) => {
          const Icon = social.icon;

          return (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8892b0] hover:text-[#64ffda] hover:-translate-y-1 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <Icon size={18} />
            </motion.a>
          );
        })}
        <div className="w-[1px] h-24 bg-[#233554] mt-2" />
      </div>
    </motion.div>
  );
}