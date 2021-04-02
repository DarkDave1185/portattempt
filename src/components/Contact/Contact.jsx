import React, { useRef } from "react";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact() {
  let ref = useRef();
  return (
    <div className="contact-container">
      <form>
        <h3>Contact_Me</h3>
        <div className="row100">
          <div className="col">
            <div className="input-box">
              <input type="text" name="" required />
              <span className="text">First Name</span>
              <span className="line"></span>
            </div>
          </div>
          <div className="col">
            <div className="input-box">
              <input type="text" name="" required />
              <span className="text">Last Name</span>
              <span className="line"></span>
            </div>
          </div>
          <div className="col">
            <div className="input-box">
              <input type="text" name="" required />
              <span className="text">Email Address</span>
              <span className="line"></span>
            </div>
          </div>
          <div className="col">
            <div className="input-box">
              <input type="text" name="" required />
              <span className="text">Phone Number</span>
              <span className="line"></span>
            </div>
          </div>
          <div className="col">
            <div className="input-box">
              <input className="text" required="" />
              <span className="text">Message</span>
              <span className=" line line-msg"></span>
            </div>
          </div>
          <div className="row100">
            <div className="col">
              <input type="submit" value="Send" />
            </div>
          </div>
        </div>
        <div className="contact-info">
          <div className="col">
            <h3>David G.S. Dawkins</h3>
            <ul>
              <li>
                <FontAwesomeIcon icon="building" className="contactIcon" />
                Street Address
              </li>
              <li>
                <FontAwesomeIcon icon="phone-alt" className="contactIcon" />
                (123)456.7890
              </li>
              <li>
                <FontAwesomeIcon
                  icon="envelope-open-text"
                  className="contactIcon"
                />
                project@icharus.com
              </li>
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
