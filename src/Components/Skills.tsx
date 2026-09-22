import { useLanguage } from '../i18n/LanguageContext';

function Skills() {
  const { t, tr } = useLanguage();
  const g = tr.skills.groups;

  return (
    <section id="habilidades" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{t('skills.tag')}</span>
          <h2 className="section-title">{t('skills.title')}</h2>
          <p className="section-desc">{t('skills.desc')}</p>
        </div>
        <div className="bento-grid">
          <div className="bento-item bento-large" data-animate>
            <i className="fas fa-laptop-code bento-icon"></i>
            <h3>{g.frontend.title}</h3>
            <div className="bento-tags">
              {g.frontend.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </div>
          <div className="bento-item" data-animate>
            <i className="fas fa-server bento-icon"></i>
            <h3>{g.backend.title}</h3>
            <div className="bento-tags">
              {g.backend.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </div>
          <div className="bento-item" data-animate>
            <i className="fas fa-gamepad bento-icon"></i>
            <h3>{g.gameDev.title}</h3>
            <div className="bento-tags">
              {g.gameDev.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </div>
          <div className="bento-item" data-animate>
            <i className="fas fa-tools bento-icon"></i>
            <h3>{g.tools.title}</h3>
            <div className="bento-tags">
              {g.tools.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;