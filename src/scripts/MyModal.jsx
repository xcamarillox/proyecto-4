import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import SignForm from './modal-screens/SignForm';
import { useState, useEffect } from "react";
import Booking1 from './modal-screens/Booking1.jsx';
import Booking2 from './modal-screens/Booking2.jsx';
import Booking3 from './modal-screens/Booking3.jsx';

let MyModal = ({mode, display}) => {
  let [page, setPage] = useState(3);
  let [modalTitle, setModalTitle] = useState("");
  let handleClose = () => display.handleShowModal();
  let handleClick = () => setPage(page + 1)
  let createBookingInit = () => {
    setPage(1);
    setModalTitle ("Nueva Reservación")
  }
  let listBookingsInit = () => {
    setModalTitle ("Lista de Reservaciones") 
  }
  useEffect( () => {
    if (mode == "createBooking") createBookingInit();
    if (mode == "listBookings") listBookingsInit();
  }, [display.isModalShowing])

  return (
      <Modal
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={display.isModalShowing}
        onHide={handleClose}
      >
        { mode!="sign" && 
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              { modalTitle }
            </Modal.Title>
          </Modal.Header>
        }
        <Modal.Body>
          { mode == "sign" && <SignForm isSignUpMode={false} /> }
          { mode == "createBooking" && page==1 && <Booking1/> }
          { mode == "createBooking" && page==2 && <Booking2/> }
          { mode == "createBooking" && page==3 && <Booking3/> }
          { mode == "listBookings" && <Booking1/> }
        </Modal.Body>
        { mode != "sign" &&
            <Modal.Footer className="justify-content-between">
              { mode == "createBooking" &&
                <div>
                  <Button className="btn btn-secondary">&lt;&lt; Anterior</Button>
                </div>
              }
              <div>
                <Button onClick={handleClose} className="btn btn-secondary me-3">Cerrar</Button>
                <Button onClick={handleClick} className="btn btn-primary">Continuar</Button>
              </div>
            </Modal.Footer>
        }
      </Modal>
  );
}
      
export default MyModal