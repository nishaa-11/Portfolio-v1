"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FloatingNav() {
  const [activeSegment, setActiveSegment] = useState("home");

  const navItems = [
    { label: "/home", href: "#home", id: "home" },
    { label: "/about", href: "#about", id: "about" },
    { label: "/projects", href: "#projects", id: "projects" },
    { label: "/contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSegment(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [navItems]);

  return (
    <motion.nav
      className="fixed right-0 top-0 h-full w-[160px] z-40 hidden md:flex flex-col justify-center items-center gap-10 bg-[#0a192f]/50 backdrop-blur-sm border-l border-[#233554]/30"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <div className="flex flex-col gap-10">
        {navItems.map((item) => (
          <motion.a
            key={item.label}
            href={item.href}
            className={`text-[15px] font-space font-medium tracking-tight transition-all duration-300 cursor-pointer ${
              activeSegment === item.id ? "text-[#64ffda]" : "text-[#a8b2d1] hover:text-[#64ffda]"
            }`}
            whileHover={{ x: -3 }}
          >
            {item.label}
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
}




