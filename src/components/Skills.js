import React from "react";
import "../cssfiles/Skills.css";

function Skills() {
  return (
    <div id="skills">
      <h1>Skills</h1>
      <div className="skills_container">
        <div>
          <h2>Frontend</h2>
          <div className="skills">
            <p>HTML</p>
            <p>CSS</p>
            <p>Javascript</p>
            <p>jQuery</p>
            <p>React</p>
          </div>
        </div>
        <div>
          <h2>Backend</h2>
          <div className="skills">
            <p>Expressjs</p>
            <p>Nodejs</p>
          </div>
        </div>
        <div>
          <h2>Database</h2>
          <div className="skills">
            <p>MongoDB</p>
          </div>
        </div>
        <div>
          <h2>Others</h2>
          <div className="skills">
            <p>C++</p>
            <p>Git</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
