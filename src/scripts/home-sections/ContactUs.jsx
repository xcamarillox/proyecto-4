const ContactUs =  (props) => {
    return (
        <div className="contactus-container">
            <h3>Contáctanos</h3>
            <div className="slices-container-contactus">
                <div className="slice-contactus">
                    <div className="slice-contactus-col">
                    <div>
                            <h4>Nuestro Correo Electrónico</h4>
                            <p>Para cualquier consulta, pregunta o comentario que pueda tener, incluidas consultas de prensa y marketing, envíenos un correo electrónico a <a href="mailto:info@appetitoso.com.mx">info@appetitoso.com.mx</a></p>
                        </div>
                        
                        <div>
                            <h4>Horario</h4>
                            <p>Lunes a Domingo de 12AM a 12PM</p>
                            <h4>Llámanos</h4>
                            <p>8181234567</p>
                            <h4>Síguenos</h4>
                            <p><a href="https://www.instagram.com/">Instagram</a></p>
                        </div>
                    </div>
                </div>
                <div className="slice-contactus">
                    <div className="slice-contactus-col">
                        <div>
                            <h4>Dónde encontrarnos</h4>
                            <p>Plaza Fiesta San Agustín. Av. Lázaro Cárdenas #222 Col. Residencial San Agustín, San Pedro Garza García, NL, México</p>
                            <a href="https://www.google.com/maps/place/Plaza+Fiesta+San+Agust%C3%ADn/@25.64879,-100.3368953,18z/data=!4m19!1m13!4m12!1m4!2m2!1d-99.5339751!2d27.4452609!4e1!1m6!1m2!1s0x8662be1286402fb5:0x2d1e883639f5b141!2splaza+fiesta+san+agustin!2m2!1d-100.3365579!2d25.6490282!3m4!1s0x8662be1286402fb5:0x2d1e883639f5b141!8m2!3d25.6490282!4d-100.3365579">→ Ver en Google Maps</a>
                        </div>
                        <div>
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.6714344392844!2d-100.33874658570889!3d25.649028183688028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662be1286402fb5%3A0x2d1e883639f5b141!2sPlaza%20Fiesta%20San%20Agust%C3%ADn!5e0!3m2!1sen!2smx!4v1647364641024!5m2!1sen!2smx" 
                                loading="lazy">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) 
}
        
export default ContactUs