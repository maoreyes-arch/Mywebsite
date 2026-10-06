import { useEffect, useState } from "react";
import { navItems } from "./data/content.js";
import { useActiveSection, useReveal, useScrolled } from "./hooks.js";

import Topbar from "./components/Topbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Education from "./components/Education.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

const sectionIds = navItems.map((item) => item.id);

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(sectionIds);
  const scrolled = useScrolled();

  useReveal();

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  // Close the menu with the Escape key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <Topbar scrolled={scrolled} onMenu={() => setMenuOpen((open) => !open)} />
      <Sidebar open={menuOpen} active={active} onClose={() => setMenuOpen(false)} />

      <main className="main-content">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
