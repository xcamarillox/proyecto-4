const ContactUs =  (props) => {
    return (
        <div className="contactus-container">
            <div className="contactus-row">
                    <h3>Dónde encontrarnos</h3>
                    <p>Plaza Fiesta San Agustín.<br />
                    Av. Lázaro Cárdenas #222 Col. Residencial San Agustín, San Pedro Garza García, Nuevo León, México.</p>
            </div>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1798.335639980041!2d-100.33731113987976!3d25.649033308698456!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2d1e883639f5b141!2sPlaza%20Fiesta%20San%20Agust%C3%ADn!5e0!3m2!1sen!2smx!4v1647380188643!5m2!1sen!2smx" 
                loading="lazy">
            </iframe>
            <div className="contactus-row">
                   <h3>Contáctanos</h3>
                   <p>Para cualquier consulta, pregunta o comentario que pueda tener, incluidas consultas de prensa y marketing, envíenos un correo electrónico a <a href="mailto:info@appetitoso.com.mx">info@appetitoso.com.mx</a></p>
                   <h4>Llámanos</h4>
                   <p>8181234567</p>
                   <h4>Horario</h4>
                   <p>Lunes a Domingo de 12AM a 12PM</p>
                   <h4>Síguenos</h4>
                   <p><a href="https://www.instagram.com/">Instagram</a></p>
            </div>
            <div className="contactus-footer">
                <div>
                    Copyright © 2022. Appetitoso. All rights reserved.
                </div>
                <div>
                    Copyright © 2022. Appetitoso. All rights reserved.
                </div>
            </div>
        </div>
    ) 
}
        
export default ContactUs