import React, { useDebugValue } from "react";

const Circle = ({x, y, bgColor}) => {
    return (
        <div className="dots" style={{top: `${y - 24}px`, left: `${x - 24}px`, backgroundColor: bgColor}}></div>
    )
}

export const Circles = ({circles}) => {
    return circles.map((circle) => (
        <Circle key={circle.id} {...circle}/>
    ))
}