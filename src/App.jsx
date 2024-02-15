import "./App.css";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <Projects />
      <section>
        <Skills />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
