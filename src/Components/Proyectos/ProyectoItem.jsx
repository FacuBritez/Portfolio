import "./ProyectoItem.css";

const ProyectoItem = ({ title, subtitle, text, image, link, tech }) => {
  return (
    <div className="col-sm-12 col-lg-6">
      <div className="card">
        <a target="_blank" href={link}>
          <img className="card-img-top" src={image} />
        </a>
        <div className="card-body">
          <h4 className="card-title">
            <a
              id={title} //corregir las etiquetas en css para que sean igual a los title?
              target="_blank"
              href={link}
            >
              <b>{title}</b> <span>{subtitle}</span>
            </a>
          </h4>
          <a className="btn" target="_blank" href={link}>
            Ver más
          </a>
          <p>{text}</p>

          <div className="tecnologias">{tech}</div>
        </div>
      </div>
    </div>
  );
};

export default ProyectoItem;
