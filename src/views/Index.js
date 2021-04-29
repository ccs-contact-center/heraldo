import React, { Component } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import ReactFitText from "react-fittext";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardText
} from "reactstrap";
import "../index.css";
import logo from "../assets/img/brand/logo.png";
import estrate1 from "../assets/img/estrate1.png";
import estrate2 from "../assets/img/estrate2.png";
import estrate3 from "../assets/img/estrate3.png";
import estrate4 from "../assets/img/estrate4.png";
import arrowL from "../assets/img/arrowL.png";
import arrowR from "../assets/img/arrowR.png";
import arrowD from "../assets/img/arrowD.png";
import { BarChart1, BarChart2, BarChart3, BarChart4, } from "./Components/Graphics"
import { Tabla1, Tabla2, Tabla3, Tabla4, Tabla5, Tabla6, Tabla7 } from "./Components/Tablas"
import MixChart1 from "./Components/MixChart"
import Prueba from "./Components/barPrueba"

class Index extends Component {
  render() {
    return (
      <div id="slideshare_root">
        <div id="bg"></div>
        <div id="bgnoise"></div>

        <ReactFullpage
          licenseKey={"FF3E03E0-2607429E-8207D2C5-8D8301B1"}
          scrollingSpeed={500} /* Options here */


          verticalCentered={false}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className="section">
                  <div
                    style={{
                      padding: "3%",
                      textAlign: "center",
                      width: "50vw"
                    }}
                  >
                    <img
                      src={logo}
                      onClick={() =>
                        document.getElementById("root").requestFullscreen
                          ? document.getElementById("root").requestFullscreen()
                          : null
                      }
                      width={400}
                      alt="logo"
                      className="img-fluid"
                      style={{
                        filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.5))"
                      }}
                    />
                    <ReactFitText>
                      <h1 className="transparent">HERALDO</h1>
                    </ReactFitText>
                    <ReactFitText>
                      <h1 className="transparent">1 al 28 de febrero 2021</h1>
                    </ReactFitText>
                  </div>
                </div>

                <div className="section ">
                <Prueba/>
                </div>

                <div className="section "
                  style={{
                    padding: "3%",
                    textAlign: "center",
                    width: "90%",
                    margin: "auto"
                  }}>
                  <h2 ><b>Objetivo</b> <br />
                    Mostar los resultados obtenidos durante Febrero 2021,  así como presentar las estrategias de
                   mejora activas y por implementar.</h2>
                </div>

                <div className="section ">
                  <ul >
                    <li style={{fontSize:"28px"}}>Marcación de bases de renovación.</li>
                    <li style={{fontSize:"28px"}}>Envío de WhatsApp con promociones.</li>
                    <li style={{fontSize:"28px"}}>Actualización de estados en WhatsApp</li>
                    <li style={{fontSize:"28px"}}>Seguimiento cotizaciones previas.</li>
                  </ul>
                </div>

                <div className="section">
                  <Container>
                    <Row>
                      <Col xs="12">
                        <h2 className="border border-bottom border-danger"><span>FEBRERO</span> <span>KPI´S</span></h2>
                      </Col>
                      <Col xs="12">
                        <Tabla1 />
                      </Col>
                      <Col xs="12">
                        <p>
                          Resumen diario de llamadas ofrecidas, atendidas y abandonadas
                        </p>
                      </Col>
                    </Row>
                  </Container>
                </div>


                <div className="section">
                  <Container>
                    <Row>
                      <Col xs="12">
                        <h2 className="border border-bottom border-danger"><span>Resumen general IN</span></h2>
                      </Col>

                      <Col xs="12">
                        <MixChart1 />
                      </Col>
                      <Col xs="12">
                        <p>
                          Las ventas tienen una fuerte correlación vs las llamadas ingresadas y aun con poco volumen
                          se logran resultados favorables.
                        </p>
                      </Col>
                    </Row>
                  </Container>
                </div>

                <div className="section">
                  <Container>
                    <Row>
                      <Col xs="12">
                        <h2 className="border border-bottom border-danger"><span>Resumen general OUT </span></h2>
                      </Col>
                      <Col xs="6">
                        <Tabla2 />
                      </Col>
                      <Col xs="6">
                        <Tabla3 />
                      </Col>
                      <Col xs="12">
                        <Tabla4 />
                      </Col>
                    </Row>
                  </Container>
                </div>

                <div className="section">
                  <Container>
                    <Row>
                      <Col xs="12">
                        <h2 className="border border-bottom border-danger"><span>Resumen general OUT </span></h2>
                      </Col>
                      <Col xs="12">
                        <div >
                          <BarChart1 />
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>

                <div className="section">
                  <Container>
                    <Row>
                      <Col xs="12">
                        <h2 className="border border-bottom border-danger"><span>Tipificación</span></h2>
                      </Col>
                      <Col xs="6">
                        <Tabla5 />
                      </Col>
                      <Col xs="6">
                        <Tabla6 />
                      </Col>
                    </Row>
                  </Container>
                </div>

                <div className="section">
                  <Container>
                    <Row>
                      <Col xs="12">
                        <h2 className="border border-bottom border-danger"><span>Tipificación</span></h2>
                        <BarChart2 />
                      </Col>
                    </Row>
                  </Container>
                </div>

                <div className="section">
                  <Container>
                    <Row>
                      <Col xs="12">
                        <h2 className="border border-bottom border-danger"><span>ESTRATEGIAS</span></h2>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs="3">
                        <Card style={{ backgroundColor: " rgb(38, 38, 38)" }}>
                          <CardBody className="cardAltura">
                            <img
                              src={estrate1}
                              width={140}
                              alt="estrate2.png"
                              className="img-fluid"
                              style={{
                                filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.5))",
                              }}
                            />
                            <CardText>Análisis de bbdd para saber la efectividad.</CardText>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col xs="3">
                        <Card style={{ backgroundColor: " rgb(38, 38, 38)" }}>
                          <CardBody className="cardAltura">
                            <img
                              src={estrate2}
                              width={160}
                              alt="estrate2.png"
                              className="img-fluid"
                              style={{
                                filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.5))",
                              }}
                            />
                            <CardText>Incremento de outbound.</CardText>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col xs="3">
                        <Card style={{ backgroundColor: " rgb(38, 38, 38)" }}>
                          <CardBody className="cardAltura">
                            <img
                              src={estrate3}
                              width={100}
                              alt="estrate3.png"
                              className="img-fluid"
                              style={{
                                filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.5))",
                              }}
                            />
                            <CardText>Creación de bbdd de micronegocios para ampliar la conversión.</CardText>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col xs="3">
                        <Card style={{ backgroundColor: " rgb(38, 38, 38)" }}>
                          <CardBody className="cardAltura">
                            <img
                              src={estrate4}
                              width={160}
                              alt="estrate4.png"
                              className="img-fluid"
                              style={{
                                filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.5))",
                              }}
                            />
                            <CardText>Asignación de breaks fuera de los intervalos de flujo inbound.</CardText>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Container>
                </div>

                <div className="section">
                  <Container>
                    <Row className="centrado-fila">
                      <Col xs="12">
                        <h2 className="border border-bottom border-danger"><span>CAPACITACIÓN</span></h2>
                      </Col>
                      <Col xs="6">
                        <Tabla7 />
                      </Col>
                      <Col xs="6">
                        <Row>
                          <Col xs="4">
                            <div className="circulo centrado-fila">
                              <p>
                                TIPIFICACIÓN
                              </p>
                            </div>
                            <img
                              src={arrowL}
                              width={50}
                              alt="estrate2.png"
                              className="img-fluid"
                            />

                          </Col>
                          <Col xs="4">
                            <div className="circulo centrado-fila">
                              <p>
                                VENTA EN FRIO
                              </p>
                            </div>
                            <img
                              src={arrowD}
                              width={50}
                              alt="estrate2.png"
                              className="img-fluid"
                            />
                          </Col>
                          <Col xs="4">
                            <div className="circulo centrado-fila">
                              <p>
                                ETIQUETA TELEFÓNICA
                              </p>
                            </div>
                            <img
                              src={arrowR}
                              width={50}
                              alt="estrate2.png"
                              className="img-fluid"
                            />
                          </Col>
                          <Col xs="4"></Col>
                          <Col xs="4">
                            <div className="circulo centrado-fila">
                              <p>
                                ETIQUETA TELEFÓNICA
                              </p>
                            </div>
                          </Col>
                          <Col xs="4"></Col>
                        </Row>
                      </Col>
                    </Row>
                  </Container>
                </div>

                <div className="section">
                  <Container>
                    <Row>
                      <Col xs="12">
                        <h2 className="border border-bottom border-danger"><span>Calidad</span></h2>
                      </Col>
                      <Col xs="6">
                        <BarChart3 />
                      </Col>
                      <Col xs="6">
                        <BarChart4 />
                      </Col>
                      <Col xs="6">
                        <p style={{ textAlign: "justify" }}>Las principales incidencias detectadas son:<br />
                          <b style={{ color: "red" }}>Voz y vocabulario</b>: Agente cuenta con muletillas y usa extranjerismos durante la
                        interacción no haciendo uso de un lenguaje profesional<br />
                          <b style={{ color: "red" }}>Manejo de objeciones</b>: Agente no proporciona beneficios de acorde a la negativa del cliente, no
                          venciendo en al menos 2 ocasiones la negativa</p>
                      </Col>
                      <Col xs="6">
                        <p style={{ textAlign: "justify" }}><strong>Con un promedio ABC de</strong>:
                        <ul>
                            <li>92.75%</li>
                          </ul>
                          <strong>Clasificando en nivel</strong>:</p>
                        <p style={{ textAlign: "justify" }}>
                          Acciones:<br />
                          Clínica de labor de retención para clientes que mencionan no tener tiempo.<br />
                          Identifica a tu cliente y objeta de acorde a su necesidad..<br />
                        </p>
                      </Col>
                    </Row>
                  </Container>
                </div>

                <div className="section">
                  <Container>
                    <Row>
                      <Col xs="12">
                        <h2>
                          <b>Gracias</b> <br />
                          <a href="www.ccscontactcenter.com">www.ccscontactcenter.com</a><br />
                    CDMX<br />
                    Amores 321 1° piso<br />
                    Col. Del Valle<br />
                    C.P. 03100 <br />
                    Tel. +52 (55) 5091.9160
                    <br />
                        </h2>
                      </Col>
                    </Row>
                  </Container>
                </div>
                {/*############################################################# AREAS #############################################################*/}

                {/* <Comercial />
                <Implementacion />
                <RRHH />
                <Capacitacion />
                <Comunicacion />
                <Operacion />
                <TI />
                <CommandCenter />
                <Calidad />
                <Procesos /> */}
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    );
  }
}

export default Index;
