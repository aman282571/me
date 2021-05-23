import React from "react";
import "../cssfiles/About.css";
import me from "./me.jpg";
function About() {
  return (
    <div id="about">
      <div className="img">
        <img src={me} />
      </div>

      <div className="about">
        <h1>Hi, I'm Aman </h1>
        <p className="content">
          I am a sophomore at IIT Roorkee. Intersted in building full stack
          projects with MERN stack. Apart from development, I also do CP on{" "}
          <a href="https://leetcode.com/aman282571/" target="_blank">
            Leetcode
          </a>{" "}
          and{" "}
          <a href="https://www.codechef.com/users/aman282571" target="_blank">
            Codechef
          </a>{" "}
          platforms.
          <p className="cv">
            <a
              href="https://drive.google.com/file/d/12IS1UO73cp8xTbbrDx3-JICDGnd22thz/view?usp=sharing"
              target="_blank"
            >
              My CV
            </a>
          </p>
        </p>
      </div>
    </div>
  );
}

export default About;
