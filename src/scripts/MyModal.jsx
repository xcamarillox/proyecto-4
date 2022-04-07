import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import SignForm from './modal-screens/SignForm';
import { useState, useEffect, useContext } from "react";
import Booking1 from './modal-screens/Booking1.jsx';
import Booking2 from './modal-screens/Booking2.jsx';
import Booking3 from './modal-screens/Booking3.jsx';
import { ModalContext } from "../scripts/context/AppContext"

const MyModal = () => {
  let [page, setPage] = useState(3);
  let [modalTitle, setModalTitle] = useState("");
  
  let handleClose = () => setModalData({ ...modalData, isModalShowing: !modalData.isModalShowing });
  let handleClick = () => setPage(page + 1)

  let createBookingInit = () => {
    setPage(1);
    setModalTitle ("Nueva Reservación")
  }
  let listBookingsInit = () => {
    setModalTitle ("Lista de Reservaciones") 
  }
  let signInit = () => {
    setModalTitle ("") 
  }

  const { modalData, setModalData } = useContext( ModalContext )

  useEffect( () => {
    if (modalData.mode == "createBooking") createBookingInit();
    if (modalData.mode == "listBookings") listBookingsInit();
    if (modalData.mode == "sign") signInit();
  }, [modalData.isModalShowing])

  

  return (
      <Modal
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={ modalData.isModalShowing }
        onHide={ handleClose }
      >
        { modalData.mode!="sign" && 
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              { modalTitle }
            </Modal.Title>
          </Modal.Header>
        }
        <Modal.Body>
          { modalData.mode == "sign" && <SignForm isSignUpMode={false} /> }
          { modalData.mode == "createBooking" && page==1 && <Booking1/> }
          { modalData.mode == "createBooking" && page==2 && <Booking2/> }
          { modalData.mode == "createBooking" && page==3 && <Booking3/> }
          { modalData.mode == "listBookings" && <Booking1/> }
        </Modal.Body>
        { modalData.mode != "sign" &&
            <Modal.Footer className="justify-content-between">
              { modalData.mode == "createBooking" &&
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