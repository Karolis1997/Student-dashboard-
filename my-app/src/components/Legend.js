import React from "react";

const Legend = (props) => {
  return (
    <div className="legend">
      <div className="title-students">{props.legendTitle}</div>
      <div className="wrapper-legend">
        <div className="pink"></div>
        <div className="score-difficulty">Score difficulty</div>
      </div>
      <div className="wrapper-legend">
        <div className="blue"></div>
        <div className="score-funfactor">Score funfactor</div>
      </div>
    </div>
  );
};

export default Legend;