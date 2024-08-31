import React, { useEffect, useState } from "react";

const TrafficLight = ({ lights }) => {
  const [color, setColor] = useState("red");

  useEffect(() => {
    let id = setInterval(() => {
      setColor((prevColor) => lights[prevColor].nextLight);
    }, lights[color].duration);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="traffic-light-container">
      <div className={`red light ${color === "red" ? "active" : ""}`}></div>
      <div
        className={`yellow light  ${color === "yellow" ? "active" : ""}`}
      ></div>
      <div
        className={`green light  ${color === "green" ? "active" : ""}`}
      ></div>
    </div>
  );
};

export default TrafficLight;
