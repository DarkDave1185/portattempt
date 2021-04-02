import React from "react";
import Particles from "react-particles-js";
import "./canvas.css";


function Canvas() {
  return (
    <div className="canvas-body">
      <Particles
        params={{
          particles: {
            number: {
              value: 110,
              density: {
                enable: true,
                value_area: 700,
              },
            },
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.2,
              sync: false,
            },
          },
          shape: {
            type: "circle",
            stroke: {
              width: 1,
              color: "#000000",
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
          },
          bubble: {
            distance: 10,
            size: 40,
            duration: 10,
            opacity: 0.8,
            speed: 1,
          },
          repulse: {
            distance: 0.5,
            duration: 0.2,
          },
        }}
      />
      
    </div>
  );
}

export default Canvas;
