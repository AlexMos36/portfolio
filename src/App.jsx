import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import ProjectsCarrousel from "./components/ProjectCarousel";
import Experiences from "./components/Experiences";
import Loading from "../src/components/Loading";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Footer from "../src/components/Footer";
function App() {
  const [loading, setLoading] = useState(true);
  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && <Loading onComplete={handleLoadingComplete} />}
      {!loading && (
        <div
          className={`transition-opacity duration-1000 ${
            loading ? "opacity-0" : "opacity-100"
          }`}
          style={{ overflowX: "hidden" }} /* Ensures no horizontal scrolling */
        >
          <Navbar />
          <div id="home">
            <Home />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="projects">
            <ProjectsCarrousel />
          </div>
          <div id="experiences">
            <Experiences />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </div>
      )}
      <ScrollToTopButton />
      <Footer />
    </>
  );
}

export default App;
