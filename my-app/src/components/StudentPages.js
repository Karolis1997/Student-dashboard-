import React from "react";
import BarChart from "./BarChart";
import Filters from "../components/Filters";
import Legend from "../components/Legend";

const Studentpage = (props) => {
  const profiles = props.studentProfiles;
  const rightProfile = profiles.filter(
    (profile) => profile.key === props.person
  );

  return (
    <div className="main">
      <div className="description">
        <h1>{props.person}</h1>
        <p>
          De grafiek hieronder toont de resultaten van de ingevulde evaluaties
          van {props.person} <br />
        </p>
      </div>
      <div className="bar-chart">
        <Legend legendTitle={"Scores for each assignment"} />
        <BarChart
          data={props.getDataOfRightStudent(props.person)}
          assignments={props.assignments}
          checkedDifficult={props.checkedDifficult}
          checkedFunFactor={props.checkedFunFactor}
        />
      </div>
      <div className="banner-right">
        {rightProfile}
        <Filters
          checkedDifficult={props.checkedDifficult}
          setStateDifficult={props.setStateDifficult}
          checkedFunFactor={props.checkedFunFactor}
          setStateFunFactor={props.setStateFunFactor}
        />
      </div>
    </div>
  );
};

export default Studentpage;