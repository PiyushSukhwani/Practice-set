import { useEffect, useState } from "react";
import { COLORS } from "./Colors";
import { Circles } from "./Circles";
import { Controls } from "./Controls";

function App() {
  const [circles, setCircles] = useState([]);
  const [history, setHistory] = useState([]);

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * COLORS.length);
    return COLORS[randomIndex];
  };

  const handleClick = (e) => {
    setCircles((prev) => {
      return [
        ...prev,
        {
          x: e.clientX,
          y: e.clientY,
          id: +new Date(),
          bgColor: getRandomColor(),
        },
      ];
    });
  };

  const handleUndo = () => {
    let copy = [...circles];
    let lastCircle = copy.pop();

    setHistory((prev) => [...prev, lastCircle]);

    setCircles(copy);
  };

  const handleRedo = () => {
    let copy = [...history];
    let lastHistory = copy.pop();

    setCircles((prev) => [...prev, lastHistory]);

    setHistory(copy);
  };

  const handleReset = () => {
    setCircles([]);
    setHistory([]);
  };

  return (
    <div className="board" onClick={handleClick}>
      <Controls
        onUndo={handleUndo}
        onRedo={handleRedo}
        onReset={handleReset}
        hasCircles={circles.length > 0}
        hasHistory={history.length > 0}
      />
      <Circles circles={circles} />
    </div>
  );
}

export default App;
