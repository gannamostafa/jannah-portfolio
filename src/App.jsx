import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Certificates from "./components/Certificates/Certificates";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import CursorGlow from "./components/CursorGlow/CursorGlow";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import Loader from "./components/Loader/Loader";
import BackToTop from "./components/BackToTop/BackToTop";

import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br
from-[#050816]
via-[#0f172a]
to-[#13071e] overflow-x-hidden">

      {loading && <Loader onFinish={() => setLoading(false)} />}
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Certificates />
      <Education />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;