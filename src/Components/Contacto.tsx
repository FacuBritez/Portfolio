import type { MouseEvent } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

function Contacto() {
  const { t } = useLanguage();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const item = e.currentTarget;
    const text = item.querySelector('span')?.textContent || '';
    const href = item.getAttribute('href') || '';

    if (
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      href.startsWith('http')
    ) {
      return;
    }

    e.preventDefault();
    navigator.clipboard.writeText(text).then(() => {
      const small = item.querySelector('small');
      if (!small) return;
      const original = small.textContent;
      small.textContent = t('contacto.copied');
      setTimeout(() => {
        small.textContent = original;
      }, 2000);
    });
  };

  return (
    <section id="contacto" className="section section-alt">
      <div className="container">
        <div className="contact-content" data-animate>
          <span className="section-tag">{t('contacto.tag')}</span>
          <h2 className="section-title">{t('contacto.title')}</h2>
          <p className="section-desc">{t('contacto.desc')}</p>
          <div className="contact-links">
            <a
              href="mailto:FacundoIvanBritez@gmail.com"
              className="contact-item"
              onClick={handleClick}
            >
              <i className="fas fa-envelope"></i>
              <span>FacundoIvanBritez@gmail.com</span>
              <small>{t('contacto.copy')}</small>
            </a>
            <a
              href="https://wa.me/5491169487170"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <i className="fab fa-whatsapp"></i>
              <span>+54 9 11 6948 7170</span>
              <small>{t('contacto.whatsapp')}</small>
            </a>
            <a
              href="https://github.com/facubritez"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <i className="fab fa-github"></i>
              <span>github.com/facubritez</span>
              <small>{t('contacto.viewProfile')}</small>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;