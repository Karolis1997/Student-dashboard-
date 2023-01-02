import React from "react";
import BarChartAssignments from "./BarChartAssignment.js";
import Legend from "../components/Legend";

const ScoresPerAssignment = (props) => {
  const radioButtonsToSort = props.assignments.map((assignment, index) => (
    <div key={index}>
      <label>
        <input
          type="radio"
          name="sort-assignments"
          value={assignment}
          onChange={(event) => props.filterAssignments(event.target.value)}
        ></input>{" "}
        {assignment}
      </label>
    </div>
  ));

  const dataAssignment = props.dataRightAssignment;
  console.log(dataAssignment);

  return (
    <div className="main">
      <div className="description">
        <h1>Scores per assignment</h1>
        <p>
          Kies in de lijst rechts een opdracht. <br /> De grafiek hieronder laat
          de data van die opdracht zien
        </p>
        <h4>
          {dataAssignment.length !== 0
            ? "Huidige selectie: " + dataAssignment[0].assignment
            : ""}
        </h4>
      </div>
      <div className="bar-chart">
        <Legend legendTitle={"Scores for each assignment"} />
        <BarChartAssignments
          data={props.dataRightAssignment}
          persons={props.persons}
        />
      </div>
      <div className="banner-right" id="radio-buttons">
        {radioButtonsToSort}
      </div>
    </div>
  );
};

export default ScoresPerAssignment;