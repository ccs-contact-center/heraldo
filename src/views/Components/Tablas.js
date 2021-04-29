import React, { Component } from "react";

class Tabla1 extends Component {
    render() {
        return (
            <div>
                <table className="table table-bordered" >
                    <thead>
                        <tr className="bg-danger">
                            <th scope="col">Fecha</th>
                            <th scope="col">Acumulado Febrero </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" >Llamadas Ofrecidas</th>
                            <td>50</td>
                        </tr>
                        <tr>
                            <th scope="row">Llamadas Atendidas</th>
                            <td>32</td>
                        </tr>
                        <tr>
                            <th scope="row">Llamadas Abandonadas</th>
                            <td>18</td>
                        </tr>
                        <tr>
                            <th scope="row">% de abandono Total</th>
                            <td className="bg-danger">36.00%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

class Tabla2 extends Component {
    render() {
        return (
            <div>
                <table className="table table-bordered" >
                    <thead>
                        <tr className="bg-danger">
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}></td>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} colSpan="5" scope="col">SEMANAS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-danger">
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" >Concepto</th>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }}>Total mes</th>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }}>Sem 1</th>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }}>Sem 2</th>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }}>Sem 3</th>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} >Sem 4</th>
                        </tr>

                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" >Llamadas Totales</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1577</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>252</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>455</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>665</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>174</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" >Llamadas Totales</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>620</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>149</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>264</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>107</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>100</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" >No Contactadas</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>926</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>103</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>191</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>558</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>74</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

class Tabla3 extends Component {
    render() {
        return (
            <div>
                <table className="table table-bordered" >
                    <thead>
                        <tr className="bg-danger">
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="col">Concepto</th>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="col">Total Anual</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" >Llamadas Totales</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1577</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row">Contactadas</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>620</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row">Contestadas para venta</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>31</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row">No Contactadas</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>926</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row">Ventas</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>13</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        )
    }
}

class Tabla4 extends Component {
    render() {
        return (
            <div>
                <table className="table table-bordered" >
                    <thead>
                        <tr className="bg-danger">
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} colSpan="9" scope="col">DIAS DE LA SEMANA</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-danger">
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="col">Concepto</th>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="col">Total mes</th>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="col">Lun</th>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="col">Mar</th>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="col">Mié</th>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="col">Jue</th>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="col">Vie</th>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="col">Sáb</th>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="col">Dom</th>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" >Llamadas Totales</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1546</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>256</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>349</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>265</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>278</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>319</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>79</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" >Contactadas</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>620</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>125</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>149</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>112</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>103</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>109</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>22</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" >No Contactadas</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>926</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>131</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>200</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>153</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>175</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>210</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>57</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

class Tabla5 extends Component {
    render() {
        return (
            <div>
                <table className="table table-bordered ">
                    <thead>
                        <tr className="bg-danger">
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} colSpan="2" scope="col">ESTATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px", fontSize: "1em", }} scope="row">BUZON</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>154</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px", fontSize: "1em", }} scope="row" >ESTA OCUPADO</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>45</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px", fontSize: "1em", }} scope="row" >NO CONTESTA</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>823 </td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px", fontSize: "1em", }} scope="row" >NO ENLAZA</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>134</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px", fontSize: "1em", }} scope="row" >NO INTERESA</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>185</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px", fontSize: "1em", }} scope="row" >NO VIVE AHÍ</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>15 </td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px", fontSize: "1em", }} scope="row" >NUMERO EQUIVOCADO </th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>7</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px", fontSize: "1em", }} scope="row" >OTROS </th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>13 </td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px", fontSize: "1em", }} scope="row" >RECEPCION DE COTIZACION</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>63</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px", fontSize: "1em", }} scope="row" >SE DEJO RECADO</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>58 </td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px", fontSize: "1em", }} scope="row" >SEGUIMIENTO A PAGO</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>40 </td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px", fontSize: "1em", }} scope="row" >SEGUIMIENTO A QUEJA</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>11 </td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px", fontSize: "1em", }} scope="row" >SUSCRIPCION NUEVA</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>3 </td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px", fontSize: "1em", }} scope="row" >TELEFONO EQUIVOCADO</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>26 </td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px", fontSize: "1em", }} scope="row" >TOTAL</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1577 </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

class Tabla6 extends Component {
    render() {
        return (
            <div>
                <table className="table table-bordered" >
                    <thead>
                        <tr className="bg-danger">
                            <th scope="col">Etiquetas de fila</th>
                            <th scope="col">Cuentas de status </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" >Renovación Diciembre</th>
                            <td>3</td>
                        </tr>
                        <tr>
                            <th scope="row">Renovación Enero</th>
                            <td>2</td>
                        </tr>
                        <tr>
                            <th scope="row">Sin contacto</th>
                            <td>6</td>
                        </tr>
                        <tr>
                            <th scope="row">Sin respuesta</th>
                            <td>3</td>
                        </tr>
                        <tr>
                            <th scope="row">Suscripción Vigente</th>
                            <td>1</td>
                        </tr>
                        <tr>
                            <th scope="row"> Total General</th>
                            <td className="bg-danger">15</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

class Tabla7 extends Component {
    render() {
        return (
            <div>
                <table className="table table-bordered" >
                    <thead>
                        <tr className="bg-danger">
                            <th scope="col">AGENTE</th>
                            <th scope="col">CALF</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" >JOSE ANTONIO GONZALEZ RODRIGUEZ</th>
                            <td>100</td>
                        </tr>
                        <tr>
                            <th scope="row">JUAN CARLOS RODRIGUEZ HILARIO</th>
                            <td>90</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}




export { Tabla1, Tabla2, Tabla3, Tabla4, Tabla5, Tabla6, Tabla7 }