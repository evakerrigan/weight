import Chart from "chart.js/auto";

import {
  dataWeightMarch,
  dataWeightApril,
  dataWeightMay,
  dataWeightJune,
} from "./data";

import { dataMarch, dataApril, dataMay, dataJune } from "./elseData";

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
const endDate = "2024-06-30";
const allMonthsLabels = generateLabels(startDate, endDate);

function getMonthIndexByDate(dateString) {
  const monthNames = ["march", "april", "may", "june"];
  const date = new Date(dateString);
  const monthName = monthNames[date.getMonth()];
  return allMonthsLabels.indexOf(monthName);
}

new Chart(document.getElementById("myChart"), {
  type: "line",
  data: {
    labels: allMonthsLabels,
    datasets: [
      {
        label: "Вес в марте",
        data: dataWeightMarch.map((value, index) => ({
          x: allMonthsLabels[index],
          y: value,
        })),
        // Дополнительные настройки датасета
      },
      {
        label: "Вес в апреле",
        data: dataWeightApril.map((value, index) => ({
          x: allMonthsLabels[index + dataWeightMarch.length],
          y: value,
        })),
        // Дополнительные настройки датасета
      },
      {
        label: "Вес в мае",
        data: dataWeightMay.map((value, index) => ({
          x: allMonthsLabels[
            index + dataWeightMarch.length + dataWeightApril.length
          ],
          y: value,
        })),
        // Дополнительные настройки датасета
      },
      {
        label: "Вес в июне",
        data: dataWeightJune.map((value, index) => ({
          x: allMonthsLabels[
            index +
              dataWeightMarch.length +
              dataWeightApril.length +
              dataWeightMay.length
          ],
          y: value,
        })),
        // Дополнительные настройки датасета
      },
    //   {
    //     type: "bar",
    //     label: "",
    //     data: dataMarch.concat(dataApril, dataMay, dataJune).map((date) => ({
    //       x: date,
    //       y: 62,
    //       mode: "markers",
    //       marker: {
    //         color: "grey",
    //       },
    //     })),
    //   },
    ],
  },
  options: {
    layout: {
      height: 200,
      width: 2000,
    },
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
