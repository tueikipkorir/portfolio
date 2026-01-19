import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Assignment from "@/components/Assignment";
import Footer from "@/components/Footer";
import Background from "@/components/Background";

export default function Home() {
  return (
    <main className="relative">
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Assignment />
      <Footer />
    </main>
  );
}
