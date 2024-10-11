import React from "react";
import About from "./components/About";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import PageSpotlight from "./components/PageSpotlight";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <PageSpotlight />
      <Hero />
      <div className="relative z-10">
        <About />
        <Projects />
        <Skills />
        <ContactForm />
        <Footer />
      </div>
    </main>
  );
}
