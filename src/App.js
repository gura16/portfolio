import Skills from "./skilss/skills";
import About from "./about/about";
import Projects from "./projects/projects";
import "./App.css";
import image1 from "./image/myimage.JPG";
import image2 from "./image/FB.svg";
import image3 from "./image/Github.svg";
import image4 from "./image/linkedin.svg";
import image5 from "./image/TW.svg";
import React, { useState } from "react";

function App() {
  const [active, setActive] = useState(0);
  const about = (index) => {
    setActive(0);
  };
  const skills = (index) => {
    setActive(1);
  };

  const projects = (index) => {
    setActive(2);
  };

  return (
    <div>
      <header>
        <h1 onClick={about}>ABOUT</h1>
        <h2 onClick={skills}>SKILLS</h2>
        <h4 onClick={projects}>PROJECTS</h4>
      </header>
      <div className="maincard">
        <div className="section1">
          <div className="profilediv">
            <img className="image1" src={image1} />
            <h5>GURAMI KVAKHADZE</h5>
            <p className="developer">Frontend Developer</p>
            <p className="developer-experience">
              Junior Frontend/React Developer
            </p>
          </div>
          <div className="icons">
            <a href="https://www.facebook.com/sfsdegf/">
              <img className="icon" src={image2} />
            </a>
            <a href="https://github.com/gura16">
              <img className="icon" src={image3} />
            </a>
            <a href="https://www.linkedin.com/in/gurami-kvakhadze-03b06a246/">
              <img className="icon" src={image4} />
            </a>
            <a href="https://twitter.com/GuraKvaxad58277">
              <img className="icon" src={image5} />
            </a>
          </div>
          <div className="contactme">Contact Me</div>
        </div>
        {active === 0 && <About />}
        {active === 1 && <Skills />}
        {active === 2 && <Projects />}
      </div>
    </div>
  );
}

export default App;
