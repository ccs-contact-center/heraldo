import React, { Component } from "react";
import "../../index.css";
import "react-circular-progressbar/dist/styles.css";
import VisibilitySensor from "react-visibility-sensor";
import { Bar } from "react-chartjs-2";

const optionsBar = {
  legend: {
    display: false
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
        ticks: {
          min: 0,
          fontColor: "rgba(255,255,255,0.7)",
          fontSize: 14
        },
        gridLines: {
          drawBorder: false
        }
      }
    ],
    xAxes: [
      {
        min: 0,
        scaleLabel: {
          display: true,
          fontColor: "rgba(255,255,255,0.7)",
          fontSize: 10
        },
        ticks: {
          min: 0,
          fontColor: "rgba(255,255,255,0.7)",
          fontSize: 14
        },
        gridLines: {
          display: false
        }
      }
    ]
  }
};

class BarChart1 extends Component {
  static defaultProps = {
    data: [1546, 620, 926]
  };

  getData(dataProp) {
    var data = {
      labels: [" ", "Total  mes", " "],
      datasets: [
        {
          label: "Total  mes",
          backgroundColor: [
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
          ],
          data: dataProp
        }
      ]
    };
    return data;
  }

  render() {
    return (
      <VisibilitySensor>
        {({ isVisible }) => {
          return (
            <div className="chart-wrapper">
              <Bar
                width={300}
                height={140}
                data={
                  isVisible ? () => this.getData(this.props.data) : []
                }
                options={optionsBar}
              />
            </div>
          );
        }}
      </VisibilitySensor>
    );
  }
}

class BarChart2 extends Component {
  static defaultProps = {
    data: [154, 45,823,134,185,15,7,13,63,58,40,11,3,26]
  };

  getData(dataProp) {
    var data = {
      labels: ["BUZON", "ESTA OCUPADO", "NO CONTESTA", "NO ENLAZA", "NO INTERESA", "NO VIVE AHÍ", "NUMERO EQUIVOCADO",
       "OTROS", "RECEPCION DE COTIZACION", "SE DEJO RECADO", "SEGUIMIENTO A PAGO", "SEGUIMIENTO A QUEJA",
        "SUSCRIPCION NUEVA", "TELEFONO EQUIVOCADO"],
      datasets: [
        {
          label: "Status",
          backgroundColor: [
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)"
          ],
          data: dataProp
        }
      ]
    };
    return data;
  }

  render() {
    return (
      <VisibilitySensor>
        {({ isVisible }) => {
          return (
            <div className="chart-wrapper">
              <Bar
                width={400}
                height={150}
                data={
                  isVisible ? () => this.getData(this.props.data) : []
                }
                options={optionsBar}
              />
            </div>
          );
        }}
      </VisibilitySensor>
    );
  }
}



class BarChart3 extends Component {
  static defaultProps = {
    data: [96.40, 92.75]
  };

  getData(dataProp) {
    var data = {
      labels: ["Enero", "Febrero"],
      datasets: [
        {
          label: "Calidad Anual",
          backgroundColor: [
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)"
          ],
          data: dataProp
        }
      ]
    };
    return data;
  }

  render() {
    return (
      <VisibilitySensor>
        {({ isVisible }) => {
          return (
            <div className="chart-wrapper">
              <Bar
                width={400}
                height={190}
                data={
                  isVisible ? () => this.getData(this.props.data) : []
                }
                options={optionsBar}
              />
            </div>
          );
        }}
      </VisibilitySensor>
    );
  }
}


class BarChart4 extends Component {
  static defaultProps = {
    data: [90, 10, 1, 0, 1, 100, 1]
  };

  getData(dataProp) {
    var data = {
      labels: [" ", "Enero", " ", " ", " ", "Febrero", " "],
      datasets: [
        {
          label: "ABC",
          backgroundColor: [
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)"
          ],
          data: dataProp
        }
      ]
    };
    return data;
  }

  render() {
    return (
      <VisibilitySensor>
        {({ isVisible }) => {
          return (
            <div className="chart-wrapper">
              <Bar
                width={400}
                height={190}
                data={
                  isVisible ? () => this.getData(this.props.data) : []
                }
                options={optionsBar}
              />
            </div>
          );
        }}
      </VisibilitySensor>
    );
  }
}


class BarChart5 extends Component {
  static defaultProps = {
    data: [78, 19, 19, 176, 25, 35, 986, 22, 97, 689, 101, 912, 598, 84]
  };

  getData(dataProp) {
    var data = {
      labels: ["APLICACIÓN DE PAGO", "CAMBIO DE REVISTA", "CAMBIO O CORRECCIÓN DE DATOS", "CANCELACIONES",
        "DEVOLUCIÓN", "FACTURACIÓN", "INFORMACIÓN", "INVESTIGACIÓN CORREO", "NO VENTA", "OTROS",
        "REPOSICIÓN", "SUSCRIPCIONES", "TRANSFERENCIA INTERNA", "VENTA CRUZADA"],
      datasets: [
        {
          label: "Tipificación",
          backgroundColor: [
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)"
          ],
          data: dataProp
        }
      ]
    };
    return data;
  }

  render() {
    return (
      <VisibilitySensor>
        {({ isVisible }) => {
          return (
            <div className="chart-wrapper">
              <Bar
                width={400}
                height={350}
                data={
                  isVisible ? () => this.getData(this.props.data) : []
                }
                options={optionsBar}
              />
            </div>
          );
        }}
      </VisibilitySensor>
    );
  }
}


class BarChart6 extends Component {
  static defaultProps = {
    data: [53, 9, 28, 358, 8, 17, 554, 4, 5, 476, 287, 488, 43, 10]
  };

  getData(dataProp) {
    var data = {
      labels: ["APLICACIÓN DE PAGO", "CAMBIO DE REVISTA", "CAMBIO O CORRECCIÓN DE DATOS", "CANCELACIONES",
        "DEVOLUCIÓN", "FACTURACIÓN", "INFORMACIÓN", "INVESTIGACIÓN CORREO", "NO VENTA", "OTROS",
        "REPOSICIÓN", "SUSCRIPCIONES", "TRANSFERENCIA INTERNA", "VENTA CRUZADA"],
      datasets: [
        {
          label: "Tipificación",
          backgroundColor: [
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)"
          ],
          data: dataProp
        }
      ]
    };
    return data;
  }

  render() {
    return (
      <VisibilitySensor>
        {({ isVisible }) => {
          return (
            <div className="chart-wrapper">
              <Bar
                width={400}
                height={350}
                data={
                  isVisible ? () => this.getData(this.props.data) : []
                }
                options={optionsBar}
              />
            </div>
          );
        }}
      </VisibilitySensor>
    );
  }
}

class BarChart7 extends Component {
  static defaultProps = {
    data: [90, 90, 100, 90, 100, 100, 100, 100]
  };

  getData(dataProp) {
    var data = {
      labels: ["JOSE EDUARDO  CRUZ  GARCIA", "LUIS DANIEL  MALDONADO  GALVAN", "ARTURO ADAN ALCANTARA GUZMAN", "DIANA LAURA  GOYRE GARCIA ", "MARIANA  FLORES  HERNANDEZ", "PATRICIA  JIMENEZ  JUAREZ", "LAURA GISELLE ROBLES  MEJIA", "TERESA  TOVAR TREJO"],
      datasets: [
        {
          label: "AGENTES",
          backgroundColor: [
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)"
          ],
          data: dataProp
        }
      ]
    };
    return data;
  }

  render() {
    return (
      <VisibilitySensor>
        {({ isVisible }) => {
          return (
            <div className="chart-wrapper">
              <Bar
                width={400}
                height={150}
                data={
                  isVisible ? () => this.getData(this.props.data) : []
                }
                options={optionsBar}
              />
            </div>
          );
        }}
      </VisibilitySensor>
    );
  }
}

class BarChart8 extends Component {
  static defaultProps = {
    data: [94.72, 93.02]
  };

  getData(dataProp) {
    var data = {
      labels: ["Enero", "Febrero"],
      datasets: [
        {
          label: "Calidad Anual",
          backgroundColor: [
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
          ],
          data: dataProp
        }
      ]
    };
    return data;
  }

  render() {
    return (
      <VisibilitySensor>
        {({ isVisible }) => {
          return (
            <div className="chart-wrapper">
              <Bar
                width={400}
                height={350}
                data={
                  isVisible ? () => this.getData(this.props.data) : []
                }
                options={optionsBar}
              />
            </div>
          );
        }}
      </VisibilitySensor>
    );
  }
}


class BarChart9 extends Component {
  static defaultProps = {
    data: [25, 75, 0, 50,42,8]
  };

  getData(dataProp) {
    var data = {
      labels: [" ", " Enero", " ", " ", "Febrero", " ",],
      datasets: [
        {
          label: "ABC",
          backgroundColor: [
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
          ],
          data: dataProp
        }
      ]
    };
    return data;
  }

  render() {
    return (
      <VisibilitySensor>
        {({ isVisible }) => {
          return (
            <div className="chart-wrapper">
              <Bar
                width={400}
                height={350}
                data={
                  isVisible ? () => this.getData(this.props.data) : []
                }
                options={optionsBar}
              />
            </div>
          );
        }}
      </VisibilitySensor>
    );
  }
}


class BarChartDoble extends Component {
  static defaultProps = {
    data1: [0, 0, 0],
    data2: [0, 0, 0]
  };

  getData(dataProp) {
    var data = {
      labels: ["2018", "2019", "2020"],
      datasets: [
        {
          label: "",
          backgroundColor: [
            "rgba(192,3,39,0.6)",
            "rgba(192,3,39,0.7)",
            "rgba(50,50,50,0.8)"
          ],
          data: dataProp[0]
        },

        {
          label: "",
          backgroundColor: [
            "rgba(192,3,39,0.6)",
            "rgba(192,3,39,0.7)",
            "rgba(50,50,50,0.8)"
          ],
          data: dataProp[1]
        }
      ]
    };
    return data;
  }

  render() {
    return (
      <VisibilitySensor>
        {({ isVisible }) => {
          return (
            <div className="chart-wrapper">
              <Bar
                width={400}
                data={
                  isVisible ? () => this.getData(this.props.data) : [0, 0, 0]
                }
                options={optionsBar}
              />
            </div>
          );
        }}
      </VisibilitySensor>
    );
  }
}


// class BarChartDoble extends Component {
//   static defaultProps = {
//     data1: [0, 0, 0],
//     data2: [0, 0, 0],
//   };

//   getData(dataProp) {
//     var data = {
//       labels: ["2018", "2019", "2020"],
//       datasets: [
//         {
//           label: "",
//           backgroundColor: [
//             "rgba(192,3,39,0.6)",
//             "rgba(192,3,39,0.7)",
//             "rgba(50,50,50,0.8)"
//           ],
//           data: dataProp[0]
//         },

//         {
//           label: "",
//           backgroundColor: [
//             "rgba(192,3,39,0.6)",
//             "rgba(192,3,39,0.7)",
//             "rgba(50,50,50,0.8)"
//           ],
//           data: dataProp[1]
//         }
//       ]
//     };
//     return data;
//   }

//   render() {
//     return (
//       <VisibilitySensor>
//         {({ isVisible }) => {
//           return (
//             <div className="chart-wrapper">
//               <Bar
//                 width={400}
//                 data={
//                   isVisible ? () => this.getData(this.props.data) : [0, 0, 0]
//                 }
//                 options={optionsBar}
//               />
//             </div>
//           );
//         }}
//       </VisibilitySensor>
//     );
//   }
// }
export { BarChart1, BarChart2, BarChart3, BarChart4, BarChart5, BarChart6, BarChart7, BarChart8, BarChart9, BarChartDoble };
