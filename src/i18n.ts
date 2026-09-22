import { useEffect, useState } from "react";

const dict = {
  es: {
    proyectos: "Proyectos", sobreMi: "Sobre mí", habilidades: "Habilidades", contacto: "Contacto",
    greeting: "Hola, soy",
    subtitle: "Desarrollador apasionado por crear experiencias digitales interactivas y funcionales.",
    verProyectos: "Ver Proyectos", contactarme: "Contactarme", desplazate: "Desplázate",
    portafolio: "Portafolio", proyectosTitle: "Proyectos Seleccionados",
    proyectosDesc: "Una selección de los trabajos en los que he estado involucrado, desde juegos de realidad virtual hasta sitios web para clientes.",
    sobreTag: "Sobre mí", sobreTitle: "Un poco sobre mi camino",
    sobreP1: "Soy un programador apasionado por la tecnología...",
    sobreP2: "Me entusiasma especialmente el desarrollo de aplicaciones interactivas...",
    sobreBtn: "Trabajemos juntos",
    skillsTag: "Habilidades", skillsTitle: "Tecnologías que utilizo",
    skillsDesc: "Herramientas y lenguajes con los que trabajo a diario.",
    contactTag: "Contacto", contactTitle: "¿Hablamos?",
    contactDesc: "Estoy abierto a nuevas oportunidades y colaboraciones.",
    copy: "Click para copiar", whatsapp: "Escribime por WhatsApp", viewProfile: "Ver perfil",
    footer: "Diseñado y construido por Facundo Britez © 2026",
  },
  en: {
    proyectos: "Projects", sobreMi: "About", habilidades: "Skills", contacto: "Contact",
    greeting: "Hi, I'm",
    subtitle: "Developer passionate about creating interactive and functional digital experiences.",
    verProyectos: "View Projects", contactarme: "Contact me", desplazate: "Scroll",
    portafolio: "Portfolio", proyectosTitle: "Selected Projects",
    proyectosDesc: "A selection of works I've been involved in, from VR games to client websites.",
    sobreTag: "About me", sobreTitle: "A bit about my journey",
    sobreP1: "I'm a programmer passionate about technology...",
    sobreP2: "I'm especially excited about developing interactive applications...",
    sobreBtn: "Let's work together",
    skillsTag: "Skills", skillsTitle: "Technologies I use",
    skillsDesc: "Tools and languages I work with daily.",
    contactTag: "Contact", contactTitle: "Let's talk?",
    contactDesc: "I'm open to new opportunities and collaborations.",
    copy: "Click to copy", whatsapp: "Message me on WhatsApp", viewProfile: "View profile",
    footer: "Designed and built by Facundo Britez © 2026",
  },
} as const;

export type Lang = keyof typeof dict;
export type Dict = typeof dict["es"];

// Estado global mínimo con suscriptores
let current: Lang =
  (localStorage.getItem("lang") as Lang) ||
  (navigator.language.startsWith("en") ? "en" : "es");

const subs = new Set<() => void>();

export function useLang() {
  const [, force] = useState(0);

  useEffect(() => {
    const fn = () => force((n) => n + 1);
    subs.add(fn);
    return () => { subs.delete(fn); };
  }, []);

  const setLang = (l: Lang) => {
    current = l;
    localStorage.setItem("lang", l);
    document.documentElement.lang = l;
    subs.forEach((fn) => fn());
  };

  return {
    lang: current,
    t: dict[current] as Dict,
    toggle: () => setLang(current === "es" ? "en" : "es"),
  };
}