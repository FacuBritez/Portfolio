import React from "react";
import '../Stylesheets/Proyectos.sass';

function Proyectos() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2>Mis proyectos</h2>
                </div>
                <div className="col-sm-12 col-lg-6">
                    <div className="card">
                        <a target="_blank" href="https://facubritez.github.io/VLV-motos/">
                            <img
                                className="card-img-top"
                                src={require('../Assets/proyectos/VLV-Motos/VLV-Motos-1.png')}
                                alt="VLV Motos" />
                        </a>
                        <div className="card-body">
                            <h4 className="card-title">
                                <a id="vlv" target="_blank" href="https://facubritez.github.io/VLV-motos/"><b>VLV Motos</b></a>
                            </h4>
                            <a className="btn" target="_blank" href="https://facubritez.github.io/VLV-motos/">Ver más</a>
                            <p>Un sitio web para un taller mecánico especializado en motocicletas.</p>
                            <p className="tecnologias">React, GIT, HTML5 Sass y Bootstrap.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-lg-6">
                    <div className="card">
                        <a target="_blank" href="https://facubritez.github.io/Calculadora/"><img className="card-img-top"
                            src={require('../Assets/proyectos/Calculadora/Calculadora.png')} alt="Calculadora" /></a>
                        <div className="card-body">
                            <h4 className="card-title">
                                <a id="calculadora" target="_blank" href="https://facubritez.github.io/Calculadora/"><b>Calculadora</b></a>
                            </h4>
                            <a className="btn" target="_blank" href="https://facubritez.github.io/Calculadora/">Ver más</a>
                            <p>Una calculadora web para poder realizar cálculos rápidos y precisos.</p>
                            <p className="tecnologias">Angular, TypeScript, GIT, HTML5 y Sass.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-lg-6">
                    <div className="card">
                        <a target="_blank" href="https://facubritez.github.io/Numeros-Romanos/"><img className="card-img-top" src={require('../Assets/proyectos/Numeros-Romanos/Numeros-Romanos.png')} alt="Conversor de Numeros Romanos" /></a>
                        <div className="card-body">
                            <h4 className="card-title">
                                <a id="romanos" target="_blank" href="https://facubritez.github.io/Numeros-Romanos/"><b>Numeros Romanos</b></a>
                            </h4>
                            <a className="btn" target="_blank" href="https://facubritez.github.io/Numeros-Romanos/">Ver más</a>
                            <p>Un conversor de números romanos y decimales para una fácil conversión entre ambos sistemas.</p>
                            <p className="tecnologias">Angular, TypeScript, GIT, HTML5, Sass y Bootstrap.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-lg-6">
                    <div className="card">
                        <a target="_blank" href="https://facubritez.github.io/Lista-de-tareas/"><img className="card-img-top" src={require('../Assets/proyectos/Lista-de-tareas/Lista-de-tareas.png')} alt="Lista de tareas" /></a>
                        <div className="card-body">
                            <h4 className="card-title">
                                <a id="Lista-de-tareas" target="_blank" href="https://facubritez.github.io/Lista-de-tareas/"><b>Lista de tareas</b></a>
                            </h4>
                            <a className="btn" target="_blank" href="https://facubritez.github.io/Lista-de-tareas/">Ver más</a>
                            <p>Una lista de tareas intuitiva para organizar y administrar tus actividades diarias de manera eficiente.</p>
                            <p className="tecnologias">Angular, TypeScript, GIT, HTML5 y Sass.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Proyectos;