import { useContext } from "react";
import Button from "react-bootstrap/Button";

import { ModalContext } from "../context/AppContext"

const Bookings =  (props) => {
    const { modalData, setModalData } = useContext(ModalContext);
    let handleShowModal = () => {
        setModalData({ isModalShowing: !modalData.isModalShowing, mode: "createBooking" });
    };
    return (
        <div className="bookings-container" id="bookings">
            <div>
                <h3>Reservaciones</h3>
                <p>Estamos abiertos para cenas en el interior y operamos a través de reservas. También reservamos el mostrador para visitas sin previa cita.</p>
                <Button variant="outline-light" onClick={ handleShowModal } size="lg" id="bookings-book">
                    Agendar
                </Button>
            </div>
        </div>
    ) 
}
        
export default Bookings