import { Chart } from 'chart.js';

// const ctx = document.getElementById('myChart').getContext('2d');
// new Chart(ctx, {
//     type: 'line',
//     data: {
//         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//         datasets: [{
//             label: 'My First dataset',
//             backgroundColor: 'rgb(255, 99, 132)',
//             borderColor: 'rgb(255, 99, 132)',
//             data: [0, 10, 5, 2, 20, 30, 45]
//         }]
//     },
//     options: {}
// });

const ctx = document.getElementById('myChart').getContext('2d');
new Chart(ctx, {
    type: 'bar', // Изменено с 'line' на 'bar'
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    // options: {
    //     scales: {
    //         y: {
    //             beginAtZero: true
    //         }
    //     }
    // }
    options: {
    scales: {
        y: {
            type: 'linear', // Указываем, что хотим использовать линейный масштаб
            position: 'left', // Опционально, указывает положение масштаба
            beginAtZero: true, // Масштаб начинается с нуля
            min: 0, // Минимальное значение
            max: 100, // Максимальное значение
            ticks: {
                stepSize: 10 // Размер шага между делениями
            }
        }
    }
}
});

document.getElementById('qwe').textContent = 'Hello World!';
console.log('first');