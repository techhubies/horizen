"use client";

import React from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const DoughnutChart = (props: DoughnutChartProps) => {
  const { accounts } = props;

  const data = {
    datasets: [
      {
        label: "Banks",
        data: [1200, 1400, 1399],
        backgroundColor: ["#0747b6", "#2265d8"],
      },
    ],
    labels: ["Bank 1", "Bank 2"],
  };

  return (
    <Doughnut
      data={data}
      options={{ cutout: "60%", plugins: { legend: { display: false } } }}
    />
  );
};
