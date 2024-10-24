import React, { useEffect, useState } from "react";

const MemoryGame = () => {
  const [gridSize, setGridSize] = useState(2);
  const [cards, setCards] = useState([]);

  const [flipped, setFlipped] = useState([]);
  const [solved, setSOlved] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const [won, setWon] = useState(false);

  const handleGridSizeChange = (e) => {
    const size = parseInt(e.target.value);
    if (size >= 2 && size <= 10) setGridSize(size);
  };

  const initializeGame = () => {
    const totalCards = gridSize * gridSize;
    const pairCount = Math.floor(totalCards / 2);

    const numbers = [...Array(pairCount).keys()].map((n) => n + 1);
    const shuffleCards = [...numbers, ...numbers]
      .sort(() => Math.random() - 0.5)
      .slice(0, totalCards)
      .map((number, index) => ({
        id: index,
        number,
      }));

    setCards(shuffleCards);
    setFlipped([]);
    setSOlved([]);
    setWon(false);
  };

  useEffect(() => {
    initializeGame();
    setWon(false);
  }, [gridSize]);

  const handleClick = (id) => {
    if (disabled || won) return;

    if (flipped.length == 0) {
      setFlipped([id]);
    }

    if (flipped.length == 1) {
      setDisabled(true);
      if (id !== flipped[0]) {
        setFlipped([...flipped, id]);
        checkMatch(id);
      } else {
        setFlipped([]);
        setDisabled(false);
      }
    }
  };

  const checkMatch = (secondId) => {
    const [firstId] = flipped;

    if (cards[firstId].number == cards[secondId].number) {
      setSOlved([...solved, firstId, secondId]);
      setFlipped([]);
      setDisabled(false);
    } else {
      setTimeout(() => {
        setFlipped([]);
        setDisabled(false);
      }, 1000);
    }
  };

  useEffect(() => {
    if (solved.length == cards.length && solved.length > 0) {
      setWon(true);
    }
  }, [solved, cards]);

  const isFlipped = (id) => flipped.includes(id) || solved.includes(id);
  const isSolved = (id) => solved.includes(id);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="font-bold mb-6 text-3xl">Memory Game</h1>
      {/* Input */}
      <div className="mb-4">
        <label htmlFor="girdSize" className="mr-2">
          {" "}
          Grid Size: (max 10)
        </label>
        <input
          type="number"
          id="girdSize"
          min="2"
          max="10"
          value={gridSize}
          onChange={handleGridSizeChange}
          className="border-2 border-gray-300 rounded px-2 py-1"
        />
      </div>

      {/* Game Board */}
      <div
        className="grid gap-2 mb-4"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
          width: `min(100%, ${gridSize * 5.5}rem)`,
        }}
      >
        {cards.map((card) => {
          return (
            <div
              key={card.id}
              onClick={() => handleClick(card.id)}
              className={`aspect-square flex items-center justify-center text-xl font-bold rounded-lg cursor-pointer transition-all duration-300 ${
                isFlipped(card.id)
                  ? isSolved(card.id)
                    ? "bg-green-500 text-white"
                    : "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-400"
              }`}
            >
              {isFlipped(card.id) ? card.number : "?"}
            </div>
          );
        })}
      </div>

      {/* Result */}
      {won && (
        <div className="text-4xl font-bold text-green-600 animate-bounce mt-4">
          You Won
        </div>
      )}

      {/* Reset & play again button */}
      <button onClick={initializeGame}
      className="text-white px-4 py-2 mt-4 bg-green-500 rounded hover:bg-green-600 transition-colors ">
        {won ? "Play Again" : "Reset Game"}
      </button>
    </div>
  );
};

export default MemoryGame;
