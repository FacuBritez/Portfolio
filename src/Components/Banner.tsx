import { useLanguage } from '../i18n/LanguageContext';

function Banner() {
  const { t } = useLanguage();

  return (
    <header className="hero">
      <div className="hero-bg-glow"></div>
      <div className="hero-content">
        <p className="hero-greeting">{t('hero.greeting')}</p>
        <h1 className="hero-title">Facundo Britez</h1>
        <p className="hero-subtitle">{t('hero.subtitle')}</p>
        <div className="hero-actions">
          <a href="#proyectos" className="btn btn-primary">{t('hero.viewProjects')}</a>
          <a href="#contacto" className="btn btn-ghost">{t('hero.contact')}</a>
        </div>
      </div>
      <a href="#proyectos" className="hero-scroll-indicator" aria-label="Ir a la sección de proyectos">
        <span>{t('hero.scroll')}</span>
        <i className="fas fa-chevron-down"></i>
      </a>
    </header>
  );
}

export default Banner;