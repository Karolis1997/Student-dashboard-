import React from "react";

const Filters = (props) => {
  const labelStyleDifficult = props.checkedDifficult
    ? { color: "red" }
    : { color: "green" };
  const labelStyleFunFactor = props.checkedFunFactor
    ? { color: "red" }
    : { color: "green" };

  return (
    <div className="filter-homepage">
      <p className="expl">Klik op de text om het filter in/uit te schakelen</p>
      <div className="filters">
        <label className="first-label" style={labelStyleDifficult}>
          <input
            type="checkbox"
            className="checkbox"
            checked={props.checkedDifficult}
            onChange={(event) => props.setStateDifficult(event.target.checked)}
          ></input>
          {props.checkedDifficult
            ? "Exclude scores difficulty"
            : "Include scores diffculty"}
        </label>
        <label style={labelStyleFunFactor}>
          <input
            type="checkbox"
            className="checkbox"
            checked={props.checkedFunFactor}
            onChange={(event) => props.setStateFunFactor(event.target.checked)}
          ></input>
          {props.checkedFunFactor
            ? "Exclude scores funfactor"
            : "Include scores funfactor"}
        </label>
      </div>
    </div>
  );
};

export default Filters;