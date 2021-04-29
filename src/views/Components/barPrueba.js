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
              label: "Bar Dataset",
              data: [7, 3, 0, 10, 0, 0, 0, 10, 0, 15, 0, 0],
              type: "bar",
              backgroundColor: "#DE924B"
            },
            {
              label: "Bar Dataset 2",
              data: [20, 18, 20, 35, 10, 15, 10, 20, 15, 25, 10, 20],
              type: "bar",
              backgroundColor: "#71A4F1"
            },
            
            {
              label: "Line Dataset 2",
              data: [7, 3, 0, 10, 0, 0, 0, 10, 0, 15, 0, 0],
              pointHoverRadius: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
              type: "line",
              backgroundColor: "#D46261",
              fill: false,
              borderColor: 'rgba(255, 99, 132, 0.2)',
            },
           
          ],
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
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
                display: true,
                // stacked: true,
                ticks: {
                  beginAtZero: true
                }
              }
            ],
            xAxes: [
              {
                display: true,
                stacked: true,
                barThickness: 25,
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }
      });
      return mixedChart;
    };
  
    render() {
      return (
        <div>
          <canvas
           style={{width:"900px"}}
            ref={chart => {
              this.chart = chart;
            }}
          />
        </div>
      );
    }
  }

  export default Prueba;


