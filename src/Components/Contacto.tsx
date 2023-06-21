import React from "react";
import '../Stylesheets/Contacto.sass';

function Contacto() {
    return (
        <div className="container">
            <h2>Contacto</h2>
            {/* onClick = copyContent function en el siguiente div */}
            <div className="contain">
                <div className="hover">
                    <i className="fa-regular fa-envelope"></i>
                    <p id="mail"> FacundoIvanBritez@gmail.com</p>
                </div>
                <span>Click to copy!</span>
            </div>
            <div className="contain">
                <a href="https://wa.me/+5491169487170" target="_blank">
                    <div className="hover">
                        <i className="fa-brands fa-whatsapp"></i>
                        <p>+54 11 6948 7170</p>
                    </div>
                    <span>Click to chat!</span>
                </a>
            </div>
        </div>
    );
}

export default Contacto;