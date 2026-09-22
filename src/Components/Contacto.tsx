import type { MouseEvent } from "react";

function Contacto() {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const item = e.currentTarget;
    const text = item.querySelector("span")?.textContent || "";
    const href = item.getAttribute("href") || "";

    // Deja pasar mailto:, tel: y http(s): con comportamiento por defecto
    if (
      href.startsWith("mailto:") ||
      href.startsWith("tel:") ||
      href.startsWith("http")
    ) {
      return;
    }

    e.preventDefault();
    navigator.clipboard.writeText(text).then(() => {
      const small = item.querySelector("small");
      if (!small) return;
      const original = small.textContent;
      small.textContent = "¡Copiado!";
      setTimeout(() => {
        small.textContent = original;
      }, 2000);
    });
  };

  return (
    <section id="contacto" className="section section-alt">
      <div className="container">
        <div className="contact-content" data-animate>
          <span className="section-tag">Contacto</span>
          <h2 className="section-title">¿Hablamos?</h2>
          <p className="section-desc">
            Estoy abierto a nuevas oportunidades y colaboraciones. Puedes
            contactarme directamente a través de los siguientes medios.
          </p>
          <div className="contact-links">
            <a
              href="mailto:FacundoIvanBritez@gmail.com"
              className="contact-item"
              onClick={handleClick}
            >
              <i className="fas fa-envelope"></i>
              <span>FacundoIvanBritez@gmail.com</span>
              <small>Click para copiar</small>
            </a>
            <a
              href="https://wa.me/5491169487170"
              target="_blank"
              rel="noopener"
              className="contact-item"
            >
              <i className="fab fa-whatsapp"></i>
              <span>+54 9 11 6948 7170</span>
              <small>Escribime por WhatsApp</small>
            </a>
            <a
              href="https://github.com/facubritez"
              target="_blank"
              rel="noopener"
              className="contact-item"
            >
              <i className="fab fa-github"></i>
              <span>github.com/facubritez</span>
              <small>Ver perfil</small>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
