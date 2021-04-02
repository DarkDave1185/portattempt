import React from "react";
import "./about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function About() {
  return (
    <div className="about">
      <information>
        <div className="kard-box1">
          <div className="icon">
            <FontAwesomeIcon icon="chalkboard-teacher" className="gcap" />
          </div>
          <div className="info">
            <h4 className="title">
              <span>
                Learn <span>x</span> Know
              </span>
            </h4>
            <div className="list1">
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>jQuery</li>
                <li>Bootstrap</li>
                <li>JSON</li>
              </ul>
            </div>
            <div className="list2">
              <ul>
                <li>API/AJAX</li>
                <li>React.js</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>Heroku</li>
                <li>Git</li>
                <li>GitHub</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="about-box3">
          <h3>David G.S. Dawkins</h3>
          <h5>FullStack Web Developer</h5>
          <p>
            Full Stack Web Developer with extensive experience working under
            pressure and producing precise and efficient results for Medical
            Treatment Transport. With my background working as a Medical
            Customer Representative, I’m able to combine my attention to detail
            in being a representative with my desire for coding. Earned a
            Certificate of Web Development through the University of Arizona. I
            have proven ability in JavaScript, CSS, React.js and responsive web
            design. I am confident that I can bring creativity and have a
            positive impact to your company and team.
          </p>
        </div>
      </information>
    </div>
  );
}

export default About;
