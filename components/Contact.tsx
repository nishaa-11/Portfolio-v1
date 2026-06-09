"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 md:px-12 lg:px-20 flex items-center justify-center bg-[#0a192f]">
      <div className="max-w-[1100px] w-full text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block"
        >
          <h2 className="text-[#64ffda] font-mono mb-4 text-base">What's Next?</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#e6f1ff] mb-6">Get In Touch</h3>
          <p className="text-[#8892b0] max-w-[600px] mx-auto text-lg mb-10 leading-relaxed">
            I'm currently looking for new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <motion.a
            href="mailto:nishabinukumar11@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 border border-[#64ffda] text-[#64ffda] rounded font-space hover:bg-[#64ffda]/10 transition-colors"
          >
            <Mail size={20} />
            Say Hello
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
