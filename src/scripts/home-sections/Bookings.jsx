import Button from "react-bootstrap/Button";

const Bookings =  (props) => {
    return (
        <div className="bookings-container" id="bookings">
            <div>
                <h3>Reservaciones</h3>
                <p>Estamos abiertos para cenas en el interior y operamos a través de reservas. También reservamos el mostrador para visitas sin previa cita.</p>
                <Button variant="outline-light" onClick={props.book} size="lg" id="bookings-book">
                    Agendar
                </Button>
            </div>
        </div>
    ) 
}
        
export default Bookings