import React from "react";
import "./navbar.css";


function Navbar() {
  return (
    <div className="navbar justify-content-center">
      <nav class="navbar navbar-expand-lg navbar-light  sticky-top ">
        <a class="navbar-brand" href="/">
          D.<span>G</span>.<span>S</span>.D.
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact">
                Contact
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/gallery">
                Gallery
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
