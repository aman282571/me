import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import React, { useEffect } from "react";
import $ from "jquery";
import "./cssfiles/app.css";
import Particles from "react-particles-js";

function App() {
  useEffect(() => {
    $("nav a:first-child").css("color", "red");
    $("nav a").on("click", (e) => {
      $(e.target).css("color", "red");
      $(e.target).siblings().css("color", "gray");
    });
  }, []);
  return (
    <div className="App">
      <Particles
        id="particles"
        params={{
          particles: {
            number: {
              value: 15,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "random",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                // src: "img/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 10,
              random: true,
              anim: {
                enable: false,
                speed: 20,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 100,
              color: "random",
              opacity: 0.4,
              width: 2,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "top",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: true,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "window",
            events: {
              onhover: {
                enable: true,
                mode: ["repulsive", "bubble"],
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 800,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 100,
                size: 50,
                duration: 2,
                opacity: 0.8,
                speed: 10,
              },
              repulse: {
                distance: 200,
                duration: 0.1,
              },
              push: {
                particles_nb: 5,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />
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
