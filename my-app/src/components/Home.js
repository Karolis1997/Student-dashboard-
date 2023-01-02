import React from "react";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import Filters from "../components/Filters";
import Legend from "../components/Legend";

const Home = (props) => {
  return (
    <div className="main">
      <div className="description">
        <h1>Student Dashboard Winc Academy</h1>
        <p>
          Hieronder staat een grafiek met de gemiddelde cijfers voor elke
          opdracht. <br /> Zoom in en uit om minder en meer data in beeld te
          krijgen. <br />
          Scrol naar links en rechts om andere data in beeld te krijgen
        </p>
      </div>
      <div className="bar-chart-home">
        <Legend
          legendTitle={"Average scores for each assignment - bar chart"}
        />
        <BarChart
          data={props.dataAverageScore}
          assignments={props.assignments}
          checkedDifficult={props.checkedDifficult}
          checkedFunFactor={props.checkedFunFactor}
        />
        <div className="line-chart">
          <Legend
            legendTitle={"Average scores for each assignment - line chart"}
          />
          <LineChart
            data={props.dataAverageScore}
            assignments={props.assignments}
            checkedDifficult={props.checkedDifficult}
            checkedFunFactor={props.checkedFunFactor}
          />
        </div>
      </div>
      <div className="banner-right">
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

export default Home;