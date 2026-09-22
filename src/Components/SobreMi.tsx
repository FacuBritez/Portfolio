import { useLanguage } from '../i18n/LanguageContext';

function SobreMi() {
  const { t } = useLanguage();

  return (
    <section id="sobre-mi" className="section section-alt">
      <div className="container">
        <div className="about-grid about-grid--text-only">
          <div className="about-text" data-animate>
            <span className="section-tag">{t('sobreMi.tag')}</span>
            <h2 className="section-title">{t('sobreMi.title')}</h2>
            <p>{t('sobreMi.p1')}</p>
            <p>{t('sobreMi.p2')}</p>
            <a href="#contacto" className="btn btn-primary">{t('sobreMi.btn')}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SobreMi;