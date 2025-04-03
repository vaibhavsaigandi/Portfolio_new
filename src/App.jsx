import "./App.css";
import Navbar from "./components/ui/Navbar";
import Home from "./components/ui/Home";
import Skills from "./components/ui/Skills";
import Experience from "./components/ui/Experience";
import Projects from "./components/ui/Projects";
import Contact from "./components/ui/Contact";
import Footer from "./components/ui/footer";

function App() {
  return (
    <>
      <div className="Wrapper h-screen w-screen overflow-y-scroll">
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
