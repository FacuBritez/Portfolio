function Skills() {
  return (
    <section id="habilidades" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Habilidades</span>
          <h2 className="section-title">Tecnologías que utilizo</h2>
          <p className="section-desc">
            Herramientas y lenguajes con los que trabajo a diario para dar vida a las ideas.
          </p>
        </div>
        <div className="bento-grid">
          <div className="bento-item bento-large" data-animate>
            <i className="fas fa-laptop-code bento-icon"></i>
            <h3>Frontend</h3>
            <div className="bento-tags">
              <span>HTML Avanzado</span>
              <span>CSS Intermedio</span>
              <span>JavaScript Avanzado</span>
              <span>TypeScript Intermedio</span>
              <span>React Básico</span>
              <span>Angular Básico</span>
              <span>Bootstrap</span>
              <span>Sass</span>
            </div>
          </div>
          <div className="bento-item" data-animate>
            <i className="fas fa-server bento-icon"></i>
            <h3>Backend</h3>
            <div className="bento-tags">
              <span>Node.js Básico</span>
              <span>MySQL Básico</span>
            </div>
          </div>
          <div className="bento-item" data-animate>
            <i className="fas fa-gamepad bento-icon"></i>
            <h3>Game Dev</h3>
            <div className="bento-tags">
              <span>Unity</span>
              <span>C#</span>
            </div>
          </div>
          <div className="bento-item" data-animate>
            <i className="fas fa-tools bento-icon"></i>
            <h3>Herramientas</h3>
            <div className="bento-tags">
              <span>Git</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;