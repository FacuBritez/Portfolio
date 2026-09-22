import { useEffect, useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li><a href="#proyectos" onClick={closeMenu}>Proyectos</a></li>
          <li><a href="#sobre-mi" onClick={closeMenu}>Sobre mí</a></li>
          <li><a href="#habilidades" onClick={closeMenu}>Habilidades</a></li>
          <li><a href="#contacto" className="nav-cta" onClick={closeMenu}>Contacto</a></li>
        </ul>
        <button
          className="nav-toggle"
          aria-label="Menú"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;