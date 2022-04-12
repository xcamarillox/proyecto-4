import Button from "react-bootstrap/Button";

import { getContextType } from "../context/AppContext"

const Jumbotron =  () => {

    const { modalData:{ isModalShowing }, setModalData } = getContextType('ModalContext');
    let handleShowModal = () => {
        setModalData({ isModalShowing: !isModalShowing, modalMode: "createBooking" });
    };
    return (
        <div className="jumbotron-container" id="top">
            <div className="jumbotron-overlay">
                <h1>
                    Abierto para cenas en el interior y pedidos por Rappi
                </h1>
                <div>
                    <Button variant="outline-light" onClick={handleShowModal} size="lg" id="jumbotron-book">
                        Reservar
                    </Button>
                    <Button 
                        variant="outline-light" 
                        size="lg"
                        onClick={ () => window.location.href='https://www.rappi.com.mx/' }>
                        Ordenar
                    </Button>
                </div>
            </div>
        </div>
    )
    
    }
        
    export default Jumbotron