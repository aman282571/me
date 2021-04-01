import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import React, { useEffect } from "react";
import $ from "jquery";
import "./cssfiles/app.css";

function App() {
  useEffect(() => {
    $("nav a").on("click", (e) => {
      $(e.target).css("color", "red");
      $(e.target).siblings().css("color", "gray");
    });
  }, []);
  return (
    <div className="App">
      <div className="navbar">
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </nav>
      </div>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
