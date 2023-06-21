import React from "react";
import '../Stylesheets/Skills.sass';

function Skills() {
    return (
        <div className="container">
            <div className="row">

                <div className="col-12">
                    <h2 id="titulo">Mis habilidades</h2>
                </div>

                {/*Columna Frontend*/}
                <div className="col-sm-12 col-lg-6">
                    <h3 className="text-center">Frontend</h3>
                    <div className="col-lg-12">
                        <img className="skills"  src={require('../Assets/skills-iconos/html.png')} alt="HTML" />
                        <p>Html</p>
                        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={80} aria-valuemin={0}
                            aria-valuemax={100}>
                            <div className="progress-bar" id="html" style={{ width: '90%' }}>Avanzado</div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <img className="skills"  src={require('../Assets/skills-iconos/css.png')} alt="CSS" />
                        <p>Css</p>
                        <div className="progress html" role="progressbar" aria-label="Basic example" aria-valuenow={50}
                            aria-valuemin={0} aria-valuemax={100}>
                            <div className="progress-bar" id="css" style={{ width: '65%' }}>Intermedio</div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <img className="skills"  src={require('../Assets/skills-iconos/bootstrap.png')} alt="Bootstrap" />
                        <p>Bootstrap</p>
                        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={50} aria-valuemin={0}
                            aria-valuemax={100}>
                            <div className="progress-bar" id="bs" style={{ width: '65%' }}>Intermedio</div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <img className="skills"  src={require('../Assets/skills-iconos/sass.png')} alt="Sass" />
                        <p>Sass</p>
                        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={50} aria-valuemin={0}
                            aria-valuemax={100}>
                            <div className="progress-bar" id="sass" style={{ width: '65%' }}>Intermedio</div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <img className="skills"  src={require('../Assets/skills-iconos/javascript.png')} alt="JavaScript" />
                        <p>JavaScript</p>
                        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={75} aria-valuemin={0}
                            aria-valuemax={100}>
                            <div className="progress-bar" id="js" style={{ width: '80%' }}>Avanzado</div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <img className="skills"  src={require('../Assets/skills-iconos/typescript.png')} alt="TypeScript" />
                        <p>TypeScript</p>
                        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={55} aria-valuemin={0}
                            aria-valuemax={100}>
                            <div className="progress-bar" id="ts" style={{ width: '55%' }}>Intermedio</div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <img className="skills"  src={require('../Assets/skills-iconos/angular.png')} alt="Angular" />
                        <p>Angular</p>
                        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={60} aria-valuemin={0}
                            aria-valuemax={100}>
                            <div className="progress-bar" id="angular" style={{ width: '40%' }}>Basico</div>
                        </div>
                    </div>
                </div>

                {/*Columna Backend y otros*/}

                <div className="col-sm-12 col-lg-6">
                    <div className="col-sm-12">
                        <h3 className="text-center">Backend</h3>
                        <div className="col-lg-12">
                            <img className="skills"  src={require('../Assets/skills-iconos/java.png')} alt="Java" />
                            <p>Java</p>
                            <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={25}
                                aria-valuemin={0} aria-valuemax={100}>
                                <div className="progress-bar" id="java" style={{ width: '15%' }}>Basico</div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <img className="skills"  src={require('../Assets/skills-iconos/database.png')} alt="MySql" />
                            <p>MySql</p>
                            <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={25}
                                aria-valuemin={0} aria-valuemax={100}>
                                <div className="progress-bar" id="mysql" style={{ width: '15%' }}>Basico</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="otros" id="otros">
                            <h3>Otros</h3>
                        </div>
                        <div className="col-lg-12">
                            <img className="skills"  src={require('../Assets/skills-iconos/git.png')} alt="Git" />
                            <p>Git</p>
                            <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={25}
                                aria-valuemin={0} aria-valuemax={100}>
                                <div className="progress-bar" id="git" style={{ width: '40%' }}>Intermedio</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;