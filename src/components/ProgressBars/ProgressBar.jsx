import React from "react";
import "./progressBar.css";

const ProgressBar = ({ questionSolved, value, height, width }) => {
  const [barStyle, setBarStyle] = React.useState({
    width: `${width}%`,
    height: `${height}px`,
  });

  return (
    <div className="progress" style={barStyle}>
      <div
        className="fill a"
        style={{ width: `${value}%`, "--progress-width": `${value}%` }}
      ></div>
    </div>
    
  );
};

export default ProgressBar;
