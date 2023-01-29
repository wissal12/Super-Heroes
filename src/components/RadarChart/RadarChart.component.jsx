import React from "react";
import { Radar } from "react-chartjs-2";

const RadarChart = ({ indicators }) => (
  <Radar
    data={{
      labels: indicators.map(({ label }) => label),
      datasets: [
        {
          label: "powerstat",
          data: indicators.map(({ value }) => value),
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
      ],
    }}
  />
);

export default RadarChart;
