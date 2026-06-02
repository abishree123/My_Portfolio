import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Internship from "./components/Internship";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";
import CodingProfiles from "./components/CodingProfiles";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Internship />
      <Projects />
      <Achievements />
      <Certifications />
      <CodingProfiles />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
