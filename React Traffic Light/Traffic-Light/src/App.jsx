/**
Build a traffic light where the lights switch from green to yellow to red after predetermined intervals and loop indefinitely.
Each light Should be lit for the following durations:

Red Light: 4000ms 
Yellow Light: 5000ms 
Green Light: 3000ms 
You are free to exercise your creativity to the style appearence of the traffic light.
**/

import React from "react";
import TrafficLight from "./TrafficLight";

const App = () => {
  const lights = {
    red: {
      duration: 4000,
      nextLight: "yellow",
    },
    yellow: {
      duration: 5000,
      nextLight: "green",
    },
    green: {
      duration: 3000,
      nextLight: "red",
    },
  };

  return (
    <div className="container">
      <TrafficLight lights={lights} />
    </div>
  );
};

export default App;
