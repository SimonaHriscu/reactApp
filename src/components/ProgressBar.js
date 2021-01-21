import React from "react";
import "components/ProgressBar.style.scss";

const ProgressBar = ({ done, style }) => {
  return (
    <div className="progress">
      <div className="progress-done" style={style}>
        {done}%
      </div>
    </div>
  );
};

export default ProgressBar;
