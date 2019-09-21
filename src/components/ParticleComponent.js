import React from "react";
import Particles from "react-particles-js";

export default () => (
  <div
    style={{
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "#0D1F2D"
    }}
  >
    <Particles
      params={{
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 700
            }
          },
          color: {
            value: "#EDF2F4"
          },
          line_linked: {
            enable: true,
            color: "EDF2F4",
            distance: 150,
            width: 1,
            opacity: 0.4
          },
          size: {
            value: 1
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05
            }
          },
          move: {
            enable: true,
            direction: "none",
            speed: 3,
            out_mode: "bounce"
          }
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push"
            },
            onhover: {
              enable: true,
              mode: "grab"
            }
          },
          modes: {
            push: {
              particles_nb: 4
            },
            grab: {
              distance: 140,
              line_linked: {
                opacity: 1
              }
            }
          },
          retina_detect: true
        }
      }}
    />
  </div>
);
