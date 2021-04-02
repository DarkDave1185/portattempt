import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Footer() {
  return (
    <footer className="footer fixed-bottom">
      <span>PortfolioReact</span>
      <span> {"Copyright © "} </span>
      <span> {new Date().getFullYear()} </span>
      <div className="links">
        <div className="media">
          <a href="https://www.linkedin.com/in/david-dawkins-756385177/">
            <FontAwesomeIcon icon={["fab", "linkedin"]} className="social" />
          </a>
        </div>
        <div className="media">
          <a href="https://github.com/DarkDave1185">
            <FontAwesomeIcon
              icon={["fab", "github-square"]}
              className="social"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
