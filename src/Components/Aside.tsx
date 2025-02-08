import React from "react";
import "../Stylesheets/Aside.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faDesktop,
  faCode,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Aside() {
  return (
    <div id="aside" className="text-center">
      {/* Avatar */}
      <div>
        <a
          href="https://github.com/FacuBritez"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://avatars.githubusercontent.com/facubritez"
            alt="Profile"
          />
        </a>
        <h1>Facundo Britez</h1>
        <p>Frontend Developer Jr</p>
      </div>

      {/* Botones redes */}
      <div id="redes">
        <a href="https://wa.me/+5491169487170" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <a
          href="https://github.com/FacuBritez"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/facundo-britez-009b11220/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>

      {/* Navbar */}
      <div id="navbar">
        <a href="#">
          <FontAwesomeIcon icon={faHouse} /> Home
        </a>
        <br />
        <a href="#sobre-mi">
          <FontAwesomeIcon icon={faUser} /> Sobre mí
        </a>
        <br />
        <a href="#proyectos">
          <FontAwesomeIcon icon={faDesktop} /> Proyectos
        </a>
        <br />
        <a href="#skills">
          <FontAwesomeIcon icon={faCode} /> Skills
        </a>
        <br />
        <a href="#contacto">
          <FontAwesomeIcon icon={faEnvelope} /> Contacto
        </a>
      </div>
    </div>
  );
}

export default Aside;