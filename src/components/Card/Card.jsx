import React from "react";
import "./card.css";

function Card() {
  return (
    <div className="container">
      <mainbody>
        <div className="cards box1">
          <div className="face face1">
            <div className="content">
              <img src="./images/covidTrivia.PNG" alt="p:A" />
              <h3>Project Apollo</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>Trivia Game built with class group</p>
              <a href="https://thawing-everglades-24119.herokuapp.com/">Link</a>
              <a href="https://github.com/DarkDave1185/Project2">Git</a>
            </div>
          </div>
        </div>
        <div className="cards box2">
          <div className="face face1">
            <div className="content">
              <img src="./images/passwordGen.PNG" alt="" />
              <h3>PasswordGen</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>Creates password based on user set parameters</p>
              <a href="https://darkdave1185.github.io/randomPasswordGenerator/">
                Link
              </a>
              <a href="https://github.com/DarkDave1185/randomPasswordGenerator">
                Git
              </a>
            </div>
          </div>
        </div>
        <div className="cards box3">
          <div className="face face1">
            <div className="content">
              <img src="./images/p-Athena.PNG" alt="" />
              <h3>Project Athena</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
                App that shows images from museum alongside random music for
                inspiration
              </p>
              <a href="https://zachsatt.github.io/Athena/">Link</a>
              <a href="https://github.com/ZachSatt/Athena">Git</a>
            </div>
          </div>
        </div>
        <div className="cards box4">
          <div className="face face1">
            <div className="content">
              <img src="./images/portfolio.PNG" alt="" />
              <h3>1st Portfolio</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>First attempt at creating a portfolio</p>
              <a href="https://darkdave1185.github.io/portfolioTemplate/index.html">
                Link
              </a>
              <a href="https://github.com/DarkDave1185/portfolioTemplate">
                Git
              </a>
            </div>
          </div>
        </div>
        <div className="cards box5">
          <div className="face face1">
            <div className="content">
              <img src="./images/empTrack" alt="" />
              <h3>Employee Tracker</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>Tracks employees is business for management</p>
              <a href="https://github.com/DarkDave1185/employeeTracker">Link</a>
              <a href="https://github.com/DarkDave1185/employeeTracker">Git</a>
            </div>
          </div>
        </div>
        <div className="cards box6">
          <div className="face face1">
            <div className="content">
              <img src="./images/Tracker19.PNG" alt="" />
              <h3>Tracker 19C</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>App tracking COVD19 cases per country</p>
              <a href="https://ct-app-19.herokuapp.com/">Link</a>
              <a href="https://github.com/DarkDave1185/CovidTracker19">
                Git
              </a>
            </div>
          </div>
        </div>
      </mainbody>
    </div>
  );
}

export default Card;
