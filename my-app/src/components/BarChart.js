import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryGroup,
  VictoryZoomContainer,
  VictoryTooltip,
} from "victory";

const BarChart = (props) => {
  const data = props.data;
  const createDataWithLabelsDifficulty = data.map((item) => ({
    assignment: item.assignment,
    scoreDifficulty: item.scoreDifficulty,
    label: `Assignment ${item.assignment}, Difficulty: ${item.scoreDifficulty}`,
  }));

  const createDataWithLabelsFunFactor = data.map((item) => ({
    assignment: item.assignment,
    scoreFunFactor: item.scoreFunFactor,
    label: `Assignment ${item.assignment}, FunFactor: ${item.scoreFunFactor}`,
  }));

  const difficultBarStyle = props.checkedDifficult
    ? { data: { fill: "#EA989A" }, labels: { fontSize: 8 } }
    : { data: { fillOpacity: 0 }, labels: { fontSize: 8 } };

  const funFactorBarStyle = props.checkedFunFactor
    ? { data: { fill: "#0D9996" }, labels: { fontSize: 8 } }
    : { data: { fillOpacity: 0 }, labels: { fontSize: 8 } };

  return (
    <div className="div-bar-chart">
      <VictoryChart
        domainPadding={10}
        containerComponent={
          <VictoryZoomContainer
            allowZoom={true}
            allowPan={true}
            zoomDimension="x"
            zoomDomain={{ x: [0, 28.5] }}
          />
        }
      >
        <VictoryGroup offset={3}>
          <VictoryBar
            labelComponent={<VictoryTooltip />}
            data={createDataWithLabelsDifficulty}
            x="assignment"
            y="scoreDifficulty"
            style={difficultBarStyle}
          />
          <VictoryBar
            labelComponent={<VictoryTooltip />}
            data={createDataWithLabelsFunFactor}
            x="assignment"
            y="scoreFunFactor"
            style={funFactorBarStyle}
          />
        </VictoryGroup>
        <VictoryAxis
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={props.assignment}
          style={{
            tickLabels: {
              fontSize: 6,
              padding: 15,
              //angle: -90,
              writingMode: "vertical-lr",
            },
          }}
        />
        <VictoryAxis
          dependentAxis
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={[1, 2, 3, 4, 5]}
          standalone={false}
          style={{
            tickLabels: {
              fontSize: 8,
            },
          }}
        />
      </VictoryChart>
    </div>
  );
};

export default BarChart;