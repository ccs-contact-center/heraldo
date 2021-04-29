
import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
    datasets: [
        {
            label: 'Llamadas ofrecidas',
            type: 'line',
            data: [90, 90, 100, 90, 100, 100, 100, 100],
            fill: false,
            borderColor: 'rgba(166, 164, 166)',
            backgroundColor: 'rgba(166, 164, 166)',
            pointBorderColor: 'rgba(166, 164, 166)',
            pointBackgroundColor: 'rgba(166, 164, 166)',
            pointHoverBackgroundColor: 'rgba(166, 164, 166)',
            pointHoverBorderColor: 'rgba(166, 164, 166)',
            yAxisID: 'y-axis-2'
        },
        {
            label: 'Visitor',
            type: 'bar',
            data: [90, 90, 100, 90, 100, 100, 100, 100],
            fill: false,
            backgroundColor: 'rgba(192,3,39,0.8)',
            borderColor: 'rgba(192,3,39,0.7)',
            hoverBackgroundColor: 'rgba(192,3,39,0.7)',
            hoverBorderColor: 'rgba(192,3,39,0.7)',
            yAxisID: 'y-axis-1'
        }
    ]
};

const options = {
    responsive: true,
    labels: ["JOSE EDUARDO  CRUZ  GARCIA", "LUIS DANIEL  MALDONADO  GALVAN", "ARTURO ADAN ALCANTARA GUZMAN",
        "DIANA LAURA  GOYRE GARCIA ", "MARIANA  FLORES  HERNANDEZ", "PATRICIA  JIMENEZ  JUAREZ", "LAURA GISELLE ROBLES  MEJIA",
        "TERESA  TOVAR TREJO"],
    tooltips: {
        mode: 'label'
    },
    elements: {
        line: {
            fill: false
        }
    },
    scales: {
        xAxes: [
            {
                display: true,
                gridLines: {
                    display: false
                },

                labels: ["JOSE EDUARDO  CRUZ  GARCIA", "LUIS DANIEL  MALDONADO  GALVAN", "ARTURO ADAN ALCANTARA GUZMAN",
                    "DIANA LAURA  GOYRE GARCIA ", "MARIANA  FLORES  HERNANDEZ", "PATRICIA  JIMENEZ  JUAREZ",
                    "LAURA GISELLE ROBLES  MEJIA", "TERESA  TOVAR TREJO"]
            }
        ],
        yAxes: [
            {
                type: 'linear',
                display: true,
                position: 'left',
                id: 'y-axis-1',
                gridLines: {
                    display: false
                },
                labels: {
                    show: true
                }
            },
            {
                type: 'linear',
                display: true,
                position: 'right',
                id: 'y-axis-2',
                gridLines: {
                    display: false
                },
                labels: {
                    show: true
                }
            }
        ]
    }
};

const plugins = [
    {
        afterDraw: (chartInstance, easing) => {
            const { ctx } = chartInstance.chart;
            ctx.fillText('', 100, 100);
        }
    }
];

class MixChart1 extends Component {
    render() {
        return (
            <div className="flex flex-col items-center w-full max-w-md">
                <Bar height={130} data={data} options={options} plugins={plugins} />
            </div>
        );
    }
}

export default MixChart1;