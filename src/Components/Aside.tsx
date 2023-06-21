import React from "react";
import '../Stylesheets/Aside.sass';

function Aside() {
    return (
        <div id="aside" className="text-center">

            {/*Avatar*/}
            <div>
                <a href="https://github.com/FacuBritez" target="_blank"><img
                    src="https://avatars.githubusercontent.com/facubritez" alt="Profile Picture" /></a>
                <h1>Facundo Britez</h1>
                <p>Frontend Developer Jr</p>
            </div>

            {/*Botones redes*/}
            <div id="redes">
                <a href="https://wa.me/+5491169487170" target="_blank"><i className="fa-brands fa-whatsapp"></i></a>
                <a href="https://github.com/FacuBritez" target="_blank"><i className="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/facundo-britez-009b11220/" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>

            {/*Navbar*/}
            <div id="navbar">
                <a href="#"><i className="fa-solid fa-house"></i>Home</a>
                <br />
                <a href="#sobre-mi"><i className="fa-solid fa-user"></i>Sobre mí</a>
                <br />
                <a href="#proyectos"><i className="fa-solid fa-desktop"></i>Proyectos</a>
                <br />
                <a href="#skills"><i className="fa-solid fa-code"></i>Skills</a>
                <br />
                <a href="#contacto"><i className="fa-solid fa-envelope"></i>Contacto</a>
            </div>
        </div>
    );
}

export default Aside;