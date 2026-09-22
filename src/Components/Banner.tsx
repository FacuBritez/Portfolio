function Banner() {
  return (
    <header className="hero">
      <div className="hero-bg-glow"></div>
      <div className="hero-content">
        <p className="hero-greeting">Hola, soy</p>
        <h1 className="hero-title">Facundo Britez</h1>
        <p className="hero-subtitle">
          Desarrollador apasionado por crear experiencias digitales interactivas y funcionales.
        </p>
        <div className="hero-actions">
          <a href="#proyectos" className="btn btn-primary">Ver Proyectos</a>
          <a href="#contacto" className="btn btn-ghost">Contactarme</a>
        </div>
      </div>
      <a href="#proyectos" className="hero-scroll-indicator" aria-label="Ir a la sección de proyectos">
        <span>Desplázate</span>
        <i className="fas fa-chevron-down"></i>
      </a>
    </header>
  );
}

export default Banner;