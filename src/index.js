import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelopeOpenText,
  faToriiGate,
  faMobileAlt,
  faCompass,
  faChalkboardTeacher,
} from "@fortawesome/free-solid-svg-icons";
/*ADD SOLID SVG ICONS TO LIBRARY*/
library.add(
  fab,
  faEnvelopeOpenText,
  faToriiGate,
  faMobileAlt,
  faCompass,
  faChalkboardTeacher
)


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

