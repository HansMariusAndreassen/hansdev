import About from "./components/About";
import ContactForm from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className="bg-gray-900 text-white min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <ContactForm />
    </main>
  );
}
