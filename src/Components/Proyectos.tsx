type Proyecto = {
  title: string;
  desc: string;
  img: string;
  link: string;
  alt: string;
  tags: string[];
};

const proyectos: Proyecto[] = [
  {
    title: 'Delrio Consultora',
    desc: 'Sitio corporativo para una consultora especializada en el desarrollo y gestión de centros comerciales en Latinoamérica. Diseño profesional orientado a la presentación de servicios de consultoría, workshops y charlas para el sector retail.',
    img: '/assets/Delrio.png',
    link: 'https://delrio.biz/',
    alt: 'Delrio Consultora - Especialistas en Centros Comerciales',
    tags: ['WordPress', 'HTML', 'CSS', 'JavaScript', 'Responsive'],
  },
  {
    title: 'BajaloYa',
    desc: 'Juego de realidad virtual de concientización donde el usuario toma decisiones en situaciones interactivas sobre compartir o denunciar.',
    img: '/assets/BajaloYa.png',
    link: 'https://drive.google.com/file/d/1ivVdIEUgMswDFVVyXLRXOfwciucSJytJ/view?usp=sharing',
    alt: 'BajaloYa - Juego de Realidad Virtual',
    tags: ['Unity', 'C#', 'Git'],
  },
  {
    title: 'Entrevista VR',
    desc: 'Un juego de realidad virtual que sumerge al usuario en la preparación de una entrevista de forma interactiva.',
    img: '/assets/EntrevistaVR.png',
    link: 'https://github.com/puerta18arg/EntrevistaVR',
    alt: 'Entrevista VR - Simulación de Realidad Virtual',
    tags: ['Unity', 'C#', 'Git'],
  },
  {
    title: 'Estados Wpp',
    desc: 'Un sitio web que facilita descargar la imagen y copiar el texto de un estado aleatorio de una base de datos.',
    img: '/assets/EstadosWpp.png',
    link: 'https://facubritez.github.io/EstadosWpp/',
    alt: 'Estados Wpp - Generador de Estados de WhatsApp',
    tags: ['React', 'Node.js', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'VLV Motos',
    desc: 'Un sitio web para un taller mecánico especializado en motocicletas.',
    img: '/assets/VLV-Motos.png',
    link: 'https://facubritez.github.io/VLV-motos/',
    alt: 'VLV Motos - Sitio Web para Taller Mecánico',
    tags: ['React', 'Git', 'HTML', 'Sass', 'Bootstrap'],
  },
];

function Proyectos() {
  return (
    <section id="proyectos" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Portafolio</span>
          <h2 className="section-title">Proyectos Seleccionados</h2>
          <p className="section-desc">
            Una selección de los trabajos en los que he estado involucrado, desde juegos de
            realidad virtual hasta sitios web para clientes.
          </p>
        </div>
        <div className="projects-grid">
          {proyectos.map((p) => (
            <article key={p.title} className="project-card" data-animate>
              <div className="project-image">
                <img src={p.img} alt={p.alt} />
                <div className="project-overlay">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener"
                    className="project-link"
                    aria-label={`Ver ${p.title}`}
                  >
                    <i className="fas fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map((t) => <span key={t}>{t}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Proyectos;