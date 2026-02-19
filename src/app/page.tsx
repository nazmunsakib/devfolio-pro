import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Experience />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="py-12 border-t border-border-subtle text-center">
        <div className="container mx-auto px-6">
          <p className="text-text-secondary text-sm">
            © {new Date().getFullYear()} Nazmun Sakib. Professional Software Developer based in Bangladesh.
          </p>
          <p className="text-text-muted text-[10px] mt-2 uppercase tracking-[0.2em]">
            Delivering Premium Digital Solutions Worldwide
          </p>
        </div>
      </footer>
    </main>
  );
}
