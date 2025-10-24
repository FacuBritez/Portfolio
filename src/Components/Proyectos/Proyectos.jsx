import React from "react";
import "../../Stylesheets/Proyectos.sass";
import ProyectoItem from "./ProyectoItem";
import VLVMotosImage from "../../Assets/proyectos/VLV-Motos-1.png";
import conversorImage from "../../Assets/proyectos/Numeros-Romanos.png";
import listaImage from "../../Assets/proyectos/Lista-de-tareas.png";
import estadosImage from "../../Assets/proyectos/Estados.png";
import juegoVRImage from "../../Assets/proyectos/Juego-VR.jpg";
import { Skills } from "./Tecnologias";

function Proyectos() {
  return (
    <div className="container" id="proyectos">
      <div className="row">
        <div className="col-12">
          <h2>Mis proyectos</h2>
        </div>
        <ProyectoItem
          title="Estados Wpp"
          subtitle={"Por encargo!"}
          text="Un sitio web que facilita el descargar la imagen y copiar el texto de un slot aleatorio de una base de datos."
          image={estadosImage}
          link="https://facubritez.github.io/EstadosWpp/"
          tech={
            <>
              <Skills.SkillReact />
              <Skills.SkillNode />
              <Skills.SkillJs />
              <Skills.SkillGit />
              <Skills.SkillHtml />
              <Skills.SkillCss />
            </>
          }
        />
        <ProyectoItem
          title="Entrevista VR"
          text="Un juego de realidad virtual que sumerge al usuario en la preparación de una entrevista de forma interactiva."
          image={juegoVRImage}
          link="https://github.com/puerta18arg/EntrevistaVR"
          tech={
            <>
              <Skills.SkillUnity />
              <Skills.SkillCSharp />
              <Skills.SkillGit />
            </>
          }
        />
        <ProyectoItem
          title="Numeros Romanos"
          text="Un conversor de números romanos y decimales para una fácil conversión entre ambos sistemas."
          image={conversorImage}
          link="https://facubritez.github.io/Numeros-Romanos/"
          tech={
            <>
              <Skills.SkillReact />
              <Skills.SkillTs />
              <Skills.SkillGit />
              <Skills.SkillHtml />
              <Skills.SkillSass />
              <Skills.SkillBs />
            </>
          }
        />
        <ProyectoItem
          title="Lista de tareas"
          text="Una lista de tareas intuitiva para organizar y administrar tus actividades diarias de manera eficiente."
          image={listaImage}
          link="https://facubritez.github.io/Lista-de-tareas/"
          tech={
            <>
              <Skills.SkillReact />
              <Skills.SkillTs />
              <Skills.SkillGit />
              <Skills.SkillHtml />
              <Skills.SkillSass />
            </>
          }
        />
        <ProyectoItem
          title="VLV Motos"
          subtitle="Por encargo!"
          text="Un sitio web para un taller mecánico especializado en motocicletas."
          image={VLVMotosImage}
          link="https://facubritez.github.io/VLV-motos/"
          tech={
            <>
              <Skills.SkillReact />
              <Skills.SkillGit />
              <Skills.SkillHtml />
              <Skills.SkillSass />
              <Skills.SkillBs />
            </>
          }
        />
      </div>
    </div>
  );
}

export default Proyectos;
