import "./App.css";
import Navbar from "./components/ui/Navbar";
import Home from "./components/ui/Home";
import Skills from "./components/ui/Skills";
import Experience from "./components/ui/Experience";
import Projects from "./components/ui/Projects";
import Contact from "./components/ui/Contact";
import Footer from "./components/ui/footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    console.log("AOS initialized");
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      once: false, // Set to false if you want animation to happen on every scroll
      offset: 100, // Offset (in pixels) from the original trigger point
      easing: "ease-in-out", // Animation easing
      disable: false, // Disable animations on certain conditions
    });

    // Refresh AOS when component updates
    AOS.refresh();
  }, []);

  return (
    <>
      <div
        className="Wrapper min-h-screen w-full bg-gradient-to-b 
      from-[#edf2fb] via-[#c1d3fe] to-[#abc4ff] overflow-auto h-full"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <Navbar id="Navbar"></Navbar>
        <Home id="home"></Home>
        <Skills id="skills"></Skills>
        <Experience id="experience"></Experience>
        {/* <Projects id="projects"></Projects> */}
        <Contact id="contact"></Contact>
        {/* <Footer id="Footer"></Footer> */}
      </div>
    </>
  );
}

export default App;
