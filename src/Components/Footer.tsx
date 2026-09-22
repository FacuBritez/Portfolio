import { useLanguage } from '../i18n/LanguageContext';

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <p>{t('footer')}<a href="https://www.linkedin.com/in/facundoivanbritez/" target="_blank" rel="noopener noreferrer">Facundo Britez</a> &copy; 2026</p>
      </div>
    </footer>
  );
}

export default Footer;