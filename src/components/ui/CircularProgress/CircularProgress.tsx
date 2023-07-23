import React, { FC } from "react";

import "./CircularProgress.scss";

interface CircularProgressProps {
  width?: number;
  height?: number;
}

const CircularProgress: FC<CircularProgressProps> = ({
  width = 40,
  height = 40,
}) => {
  return (
    <span 
      style={{width, height}}
      className="circular-progress">
      <svg className="circular-progress__svg" viewBox="22 22 44 44">
        <circle
          className="circular-progress__circle"
          cx="44"
          cy="44"
          r="20.2"
          fill="none"
          stroke-width="3.6"></circle>
      </svg>
    </span>
  );
};

export default CircularProgress;
