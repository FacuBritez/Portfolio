import { useLanguage } from '../i18n/LanguageContext';

type Proyecto = {
  key: 'delrio' | 'bajaloYa' | 'entrevistaVr' | 'estadosWpp' | 'vlvMotos';
  title: string;
  img: string;
  link: string;
  tags: string[];
};

const proyectos: Proyecto[] = [
  {
    key: 'delrio',
    title: 'Delrio Consultora',
    img: '/assets/Delrio.png',
    link: 'https://delrio.biz/',
    tags: ['WordPress', 'HTML', 'CSS', 'JavaScript', 'Responsive'],
  },
  {
    key: 'bajaloYa',
    title: 'BajaloYa',
    img: '/assets/BajaloYa.png',
    link: 'https://drive.google.com/file/d/1ivVdIEUgMswDFVVyXLRXOfwciucSJytJ/view?usp=sharing',
    tags: ['Unity', 'C#', 'Git'],
  },
  {
    key: 'entrevistaVr',
    title: 'Entrevista VR',
    img: '/assets/EntrevistaVR.png',
    link: 'https://github.com/puerta18arg/EntrevistaVR',
    tags: ['Unity', 'C#', 'Git'],
  },
  {
    key: 'estadosWpp',
    title: 'Estados Wpp',
    img: '/assets/EstadosWpp.png',
    link: 'https://facubritez.github.io/EstadosWpp/',
    tags: ['React', 'Node.js', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    key: 'vlvMotos',
    title: 'VLV Motos',
    img: '/assets/VLV-Motos.png',
    link: 'https://facubritez.github.io/VLV-motos/',
    tags: ['React', 'Git', 'HTML', 'Sass', 'Bootstrap'],
  },
];

function Proyectos() {
  const { t } = useLanguage();

  return (
    <section id="proyectos" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{t('proyectos.tag')}</span>
          <h2 className="section-title">{t('proyectos.title')}</h2>
          <p className="section-desc">{t('proyectos.desc')}</p>
        </div>
        <div className="projects-grid">
          {proyectos.map((p) => (
            <article key={p.key} className="project-card" data-animate>
              <div className="project-image">
                <img src={p.img} alt={t(`proyectos.alts.${p.key}`)} />
                <div className="project-overlay">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label={`${t('proyectos.view')} ${p.title}`}
                  >
                    <i className="fas fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{t(`proyectos.items.${p.key}`)}</p>
                <div className="project-tags">
                  {p.tags.map((tag) => <span key={tag}>{tag}</span>)}
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