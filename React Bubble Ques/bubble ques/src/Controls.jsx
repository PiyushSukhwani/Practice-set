import React from "react";

export const Controls = ({
  onUndo,
  onRedo,
  onReset,
  hasHistory,
  hasCircles,
}) => {
  return (
    <div className="controls" onClick={(e) => e.stopPropagation()}>
      <button
        onClick={onUndo}
        className={`${hasCircles ? "" : "disabled"}`}
        disabled={!hasCircles}
      >
        Undo
      </button>
      <button
        onClick={onRedo}
        className={`${hasHistory ? "" : "disabled"}`}
        disabled={!hasHistory}
      >
        Redo
      </button>
      <button
        onClick={onReset}
        // className={`${hasHistory ? "" : "disabled"}`}
        // disabled={!hasHistory}
      >
        Reset
      </button>
    </div>
  );
};
