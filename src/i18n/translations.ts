export const translations = {
  es: {
    nav: {
      proyectos: "Proyectos",
      sobreMi: "Sobre mí",
      habilidades: "Habilidades",
      contacto: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      subtitle:
        "Desarrollador apasionado por crear experiencias digitales interactivas y funcionales.",
      viewProjects: "Ver Proyectos",
      contact: "Contactarme",
      scroll: "Desplázate",
    },
    proyectos: {
      tag: "Portafolio",
      title: "Proyectos Seleccionados",
      desc: "Una selección de los trabajos en los que he estado involucrado, desde juegos de realidad virtual hasta sitios web para clientes.",
      items: {
        delrio:
          "Sitio corporativo para una consultora especializada en el desarrollo y gestión de centros comerciales en Latinoamérica. Diseño profesional orientado a la presentación de servicios de consultoría, workshops y charlas para el sector retail.",
        bajaloYa:
          "Juego de realidad virtual de concientización donde el usuario toma decisiones en situaciones interactivas sobre compartir o denunciar.",
        entrevistaVr:
          "Un juego de realidad virtual que sumerge al usuario en la preparación de una entrevista de forma interactiva.",
        estadosWpp:
          "Un sitio web que facilita descargar la imagen y copiar el texto de un estado aleatorio de una base de datos.",
        vlvMotos: "Un sitio web para un taller mecánico especializado en motocicletas.",
      },
      alts: {
        delrio: "Delrio Consultora - Especialistas en Centros Comerciales",
        bajaloYa: "BajaloYa - Juego de Realidad Virtual",
        entrevistaVr: "Entrevista VR - Simulación de Realidad Virtual",
        estadosWpp: "Estados Wpp - Generador de Estados de WhatsApp",
        vlvMotos: "VLV Motos - Sitio Web para Taller Mecánico",
      },
      view: "Ver",
    },
    sobreMi: {
      tag: "Sobre mí",
      title: "Un poco sobre mi camino",
      p1: "Soy un programador apasionado por la tecnología. He estado aprendiendo diferentes lenguajes de programación y siempre estoy buscando nuevos desafíos para mejorar mis habilidades. Mi enfoque se centra en crear soluciones que no solo funcionen bien, sino que también ofrezcan una experiencia de usuario excepcional.",
      p2: "Me entusiasma especialmente el desarrollo de aplicaciones interactivas y juegos de realidad virtual, donde puedo combinar lógica, diseño y creatividad.",
      btn: "Trabajemos juntos",
    },
    skills: {
      tag: "Habilidades",
      title: "Tecnologías que utilizo",
      desc: "Herramientas y lenguajes con los que trabajo a diario para dar vida a las ideas.",
      groups: {
        frontend: {
          title: "Frontend",
          tags: [
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "React",
            "Angular",
            "Bootstrap",
            "Sass",
          ],
        },
        backend: {
          title: "Backend",
          tags: ["Node.js", "MySQL"],
        },
        gameDev: {
          title: "Game Dev",
          tags: ["Unity", "C#"],
        },
        tools: {
          title: "Herramientas",
          tags: ["Git", "Figma"],
        },
      },
    },
    contacto: {
      tag: "Contacto",
      title: "¿Hablamos?",
      desc: "Estoy abierto a nuevas oportunidades y colaboraciones. Puedes contactarme directamente a través de los siguientes medios.",
      copy: "Click para copiar",
      whatsapp: "Escribime por WhatsApp",
      viewProfile: "Ver perfil",
      copied: "¡Copiado!",
    },
    footer: "Diseñado y construido por ",
  },

  en: {
    nav: {
      proyectos: "Projects",
      sobreMi: "About",
      habilidades: "Skills",
      contacto: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      subtitle:
        "Developer passionate about creating interactive and functional digital experiences.",
      viewProjects: "View Projects",
      contact: "Contact me",
      scroll: "Scroll",
    },
    proyectos: {
      tag: "Portfolio",
      title: "Selected Projects",
      desc: "A selection of works I've been involved in, from virtual reality games to client websites.",
      items: {
        delrio:
          "Corporate website for a consultancy specialized in the development and management of shopping centers across Latin America. Professional design focused on presenting consulting services, workshops, and talks for the retail sector.",
        bajaloYa:
          "A virtual reality awareness game where the user makes decisions in interactive situations about sharing or reporting.",
        entrevistaVr:
          "A virtual reality game that immerses the user in interview preparation in an interactive way.",
        estadosWpp:
          "A website that makes it easy to download the image and copy the text of a random status from a database.",
        vlvMotos: "A website for a motorcycle repair shop.",
      },
      alts: {
        delrio: "Delrio Consultora - Shopping Center Specialists",
        bajaloYa: "BajaloYa - Virtual Reality Game",
        entrevistaVr: "Entrevista VR - Virtual Reality Simulation",
        estadosWpp: "Estados Wpp - WhatsApp Status Generator",
        vlvMotos: "VLV Motos - Motorcycle Repair Shop Website",
      },
      view: "View",
    },
    sobreMi: {
      tag: "About me",
      title: "A bit about my journey",
      p1: "I'm a programmer passionate about technology. I've been learning different programming languages and I'm always looking for new challenges to improve my skills. My focus is on building solutions that don't just work well, but also deliver an exceptional user experience.",
      p2: "I'm especially excited about developing interactive applications and virtual reality games, where I can combine logic, design, and creativity.",
      btn: "Let's work together",
    },
    skills: {
      tag: "Skills",
      title: "Technologies I use",
      desc: "Tools and languages I work with daily to bring ideas to life.",
      groups: {
        frontend: {
          title: "Frontend",
          tags: [
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "React",
            "Angular",
            "Bootstrap",
            "Sass",
          ],
        },
        backend: {
          title: "Backend",
          tags: ["Node.js", "MySQL"],
        },
        gameDev: {
          title: "Game Dev",
          tags: ["Unity", "C#"],
        },
        tools: {
          title: "Tools",
          tags: ["Git", "Figma"],
        },
      },
    },
    contacto: {
      tag: "Contact",
      title: "Let's talk?",
      desc: "I'm open to new opportunities and collaborations. You can reach me directly through the following channels.",
      copy: "Click to copy",
      whatsapp: "Message me on WhatsApp",
      viewProfile: "View profile",
      copied: "Copied!",
    },
    footer: "Designed and built by ",
  },
};

export type Lang = keyof typeof translations;