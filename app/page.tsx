import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import FloatingNav from "@/components/FloatingNav";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  return (
    <main className="bg-[#0a192f] flex">
      {/* Main Content Area */}
      <div className="flex-1 min-w-0 pr-0 md:pr-[160px]">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
      
      {/* Dedicated Navigation Column */}
      <FloatingNav />
      <SocialLinks />
    </main>
  );
}
