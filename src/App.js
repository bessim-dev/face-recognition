import React from "react";
import "./App.css";
import Particles from "react-particles-js";
import { Main } from "./pages/main/main";
const PARTICLES_PARAMS = {
  particles: {
    number: {
      value: 150,
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
      resize: true,
    },
  },
};
function App() {
  return (
    <div className="App">
      <Main />
      <Particles params={PARTICLES_PARAMS} className="particles" />
    </div>
  );
}

export default App;
