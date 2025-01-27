import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
// import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Testimonial from "./components/Testimonial";
// import Testimonial from "./components/Testimonial";

function App() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Services />
        <Project />
        <Skills />
        <Testimonial />

        {/* <Testimonial /> */}
        <Contact />
        {/* <Footer /> */}
      </main>
    </>
  );
}

export default App;
