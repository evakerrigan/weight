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
      {
        type: "bar",
        label: "еще",
        data: dataMarch.concat(dataApril, dataMay, dataJune).map((date) => ({
          x: date,
          y: 62,
          mode: "markers",
          marker: {
            color: "gray",
          },
        })),
      },
      {
      type: 'bar', // Изменено с 'line' на 'bar'
      label: "месяца",
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green'],
          datasets: [{
              label: '# of Votes',
              data: [62, 62, 62, 62, 62, 62],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                //   'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                //   'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                //   'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                //   'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
    },
    ],
  },
  options: {
    // layout: {
    //   height: 200,
    //   width: 2000,
    // },
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
