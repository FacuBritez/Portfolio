import { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, lang, setLang } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#" className="nav-logo" aria-label="Volver al inicio">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">Facu</span>
          <span className="logo-slash">/</span>
          <span className="logo-bracket">&gt;</span>
        </a>

        <div className="nav-controls">
          <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <li><a href="#proyectos" onClick={closeMenu}>{t('nav.proyectos')}</a></li>
            <li><a href="#sobre-mi" onClick={closeMenu}>{t('nav.sobreMi')}</a></li>
            <li><a href="#habilidades" onClick={closeMenu}>{t('nav.habilidades')}</a></li>
            <li><a href="#contacto" className="nav-cta" onClick={closeMenu}>{t('nav.contacto')}</a></li>
          </ul>

          <div className="lang-toggle" role="group" aria-label="Idioma / Language">
            <button
              className={`lang-option ${lang === 'es' ? 'active' : ''}`}
              onClick={() => setLang('es')}
              aria-pressed={lang === 'es'}
            >
              ES
            </button>
            <button
              className={`lang-option ${lang === 'en' ? 'active' : ''}`}
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
          </div>

          <button
            className="nav-toggle"
            aria-label="Menú"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;