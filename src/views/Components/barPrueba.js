import React from 'react';
import ReactDOM from 'react-dom';
import Chart from 'chart.js';

class Prueba extends React.Component {
  chart = null;

  componentDidMount() {
    this.configureChart();
  }

  configureChart = () => {
    const chartCanvas = ReactDOM.findDOMNode(this.chart);

    const mixedChart = new Chart(chartCanvas, {
      type: "bar",
      data: {
        datasets: [
          {
            label: "Llamadas Ofrecidas",
            data: [0, 1, 4, 1, 2, 1, 0, 2, 3, 1, 2, 1, 0, 0, 2, 1, 1, 0, 7, 1, 0, 2, 7, 2, 3, 6, 0, 0],
            pointHoverRadius: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            type: "line",
            backgroundColor: "rgba(192,3,39,0.7)",
            fill: false,
            borderColor: 'rgba(255, 99, 132, 0.2)',
          },
          {
            label: "Llamadas Abandonadas",
            data: [0, 1, 0.75, 0.100, 0, 0, 0, 0.50, 0.33, 0, 0.50, 0, 0, 0, 0.100, 0, 0, 0, 0.57, 0, 0, 0, 0.71, 0, 0, 0],
            type: "bar",
            backgroundColor: "rgba(192,3,39,0.7)",
          },
          {
            label: "Llamadas Atendidas",
            data: [0, 1, 4, 1, 2, 1, 0, 2, 3, 1, 2, 1, 0, 0, 2, 1, 1, 0, 7, 1, 0, 2, 7, 2, 3, 6, 0, 0],
            type: "bar",
            backgroundColor: "#737276"
          },




        ],
        labels: [
          "Lun 01",
          "Mar 02",
          "Mie 03",
          "Jue 04",
          "Vie 05",
          "Sab 06",
          "Dom 07",
          "Lun 08",
          "Mar 09",
          "Mie 10",
          "Jue 11",
          "Vie 12",
          "Sab 13",
          "Dom 14",
          "Lun 15",
          "Mar 16",
          "Mie 17",
          "Jue 18",
          "Vie 19",
          "Sab 20",
          "Dom 21",
          "Lun 22",
          "Mar 23",
          "Mie 24",
          "Jue 25",
          "Vie 26",
          "Sab 27",
          "Dom 28",

        ]
      },
      options: {
        elements: {
          line: {
            tension: 0.000001
          }
        },
        tooltips: {
          displayColors: false
        },
        legend: {
          display: true,
          position: "bottom"
        },
        scales: {
          yAxes: [
            {
              min: 0,
              scaleLabel: {
                display: true,
                fontColor: "rgba(255,255,255,0.7)",
                fontSize: 10
              },
              // stacked: true,
              ticks: {
                beginAtZero: true,
                min: 0,
                fontColor: "rgba(255,255,255,0.7)",
                fontSize: 14
              }
            }
          ],
          xAxes: [
            {
              scaleLabel: {
                display: true,
                fontColor: "rgba(255,255,255,0.7)",
                fontSize: 10
              },
              display: true,
              stacked: true,
              barThickness: 25,
              ticks: {
                beginAtZero: true,
                min: 0,
                fontColor: "rgba(255,255,255,0.7)",
                fontSize: 14
              },
              fontColor: "rgba(255,255,255,0.7)",
              fontSize: 10,
              gridLines: {
                display: false
              }
              
            },
            
          ]
        }
      }
    });
    return mixedChart;
  };

  render() {
    return (
      <div>
        <div>

        </div>
        <canvas
          style={{ width: "1000px" }}
          ref={chart => {
            this.chart = chart;
          }}
        />
      </div>
    );
  }
}

export default Prueba;


