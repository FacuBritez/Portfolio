import React from "react";
import '../Stylesheets/Contacto.sass';

function Contacto() {
    const copyText = (event) => {
        const text = event.currentTarget.querySelector("p").textContent;
        navigator.clipboard.writeText(text)
        .then(alert("Copiado al portapapeles!"))  
        .catch(err => console.log("Error: ", err));      
    };

    return (
        <div className="container" id="contacto">
            <h2>Contacto</h2>
            <div className="contain" onClick={copyText} style={{ cursor: "pointer" }}>
                <div className="hover">
                    <i className="fa-regular fa-envelope"></i>
                    <p>FacundoIvanBritez@gmail.com</p>
                </div>
                <span>Click to copy!</span>
            </div>
            <div className="contain" onClick={copyText} style={{ cursor: "pointer" }}>
                <div className="hover">
                    <i className="fa-brands fa-whatsapp"></i>
                    <p>+54 11 6948 7170</p>
                </div>
                <span>Click to copy!</span>
            </div>
        </div>
    );
}

export default Contacto;
