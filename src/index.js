import Chart from "chart.js/auto";

import {
  dataWeightMarch,
  dataWeightApril,
  dataWeightMay,
  dataWeightJune,
  dataWeightJuly,
} from "./data";

import { dataMarch, dataApril, dataMay, dataJune, dataJuly } from "./elseData";

function generateLabels(startDate, endDate) {
  let currentDate = new Date(startDate);
  let end = new Date(endDate);
  let labels = [];

  while (currentDate <= end) {
    labels.push(currentDate.toLocaleDateString());
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return labels;
}

const startDate = "2024-03-01";
const endDate = "2024-07-04";
const allMonthsLabels = generateLabels(startDate, endDate);

new Chart(document.getElementById("myChart"), {
  type: "line",
  data: {
    labels: allMonthsLabels,
    datasets: [
      {
        label: "МАРТ",
        data: dataWeightMarch.map((value, index) => ({
          x: allMonthsLabels[index],
          y: value,
        })),
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2,
      },
      {
        label: "АПРЕЛЬ",
        data: dataWeightApril.map((value, index) => ({
          x: allMonthsLabels[index + dataWeightMarch.length],
          y: value,
        })),
        fill: true,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 2,
      },
      {
        label: "МАЙ",
        data: dataWeightMay.map((value, index) => ({
          x: allMonthsLabels[
            index + dataWeightMarch.length + dataWeightApril.length
          ],
          y: value,
        })),
        fill: true,
        backgroundColor: "rgba(255, 206, 86, 0.2)",
        borderColor: "rgba(255, 206, 86, 1)",
        borderWidth: 2,
      },
      {
        label: "ИЮНЬ",
        data: dataWeightJune.map((value, index) => ({
          x: allMonthsLabels[
            index +
              dataWeightMarch.length +
              dataWeightApril.length +
              dataWeightMay.length
          ],
          y: value,
        })),
        fill: true,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
      },
      {
        label: "ИЮЛЬ",
        data: dataWeightJuly.map((value, index) => ({
          x: allMonthsLabels[
            index +
              dataWeightMarch.length +
              dataWeightApril.length +
              dataWeightMay.length +
              dataWeightJune.length
          ],
          y: value,
        })),
        fill: true,
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 2,
      },
    //   {
    //     type: "bar",
    //     label: "еще",
    //     data: dataMarch.concat(dataApril, dataMay, dataJune, dataJuly).map((date) => ({
    //       x: date,
    //       y: 62,
    //       mode: "markers",
    //       marker: {
    //         color: "gray",
    //       },
    //     })),
    //   },
    ],
  },
  options: {
    scales: {
      y: {
        type: "linear",
        position: "left",
        beginAtZero: true,
        min: 59,
        max: 62,
        ticks: {
          stepSize: 1,
        },
      },
    },
  },
});

//           backgroundColor: [
//             "rgba(255, 99, 132, 0.2)",
//             "rgba(54, 162, 235, 0.2)",
//             "rgba(255, 206, 86, 0.2)",
//             'rgba(75, 192, 192, 0.2)',
//             "rgba(153, 102, 255, 0.2)",
//             'rgba(255, 159, 64, 0.2)'
//           ],
//           borderColor: [
//             "rgba(255, 99, 132, 1)",
//             "rgba(54, 162, 235, 1)",
//             "rgba(255, 206, 86, 1)",
//             'rgba(75, 192, 192, 1)',
//             "rgba(153, 102, 255, 1)",
//             'rgba(255, 159, 64, 1)'
