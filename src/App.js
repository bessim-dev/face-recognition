import React from "react";
import "./App.css";
import Particles from "react-particles-js";
const PARTICLES_PARAMS = {
  particles: {
    number: {
      value: 100,
    },
    size: {
      value: 6,
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
    },
  },
};
function App() {
  return (
    <div className="App">
      hey
      <Particles params={PARTICLES_PARAMS} />
    </div>
  );
}

export default App;
