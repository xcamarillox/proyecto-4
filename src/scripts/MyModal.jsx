import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import SignForm from './modal-screens/SignForm';
import { useState, useEffect } from "react";
import Booking1 from './modal-screens/Booking1.jsx';
import Booking2 from './modal-screens/Booking2.jsx';
import Booking3 from './modal-screens/Booking3.jsx';
import { getModalContext } from "./context/AppContext"

const MyModal = () => {
  const { modalData:{ isModalShowing, modalMode }, setModalData } = getModalContext()
  const [{ title, page }, setModalSetup ] = useState({ title:"", page: 3 });
  const handleClose = () => setModalData({ modalMode, isModalShowing: !isModalShowing });
  const handleNextClick = () => setModalSetup({ title, page: page + 1})
 

  let modalInitSetup = (modalMode) => {
    if (modalMode == "createBooking") setModalSetup({ title:"Nueva Reservación", page: 1 })
    else if (modalMode == "listBookings") setModalSetup({ title:"Lista de Reservaciones", page: 1 }) 
    else if (modalMode == "sign") setModalSetup({ title:"", page: 1 }) 
  }

  useEffect( () => {
    if(isModalShowing) modalInitSetup(modalMode);
  }, [isModalShowing])

  return (
      <Modal
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={ isModalShowing }
        onHide={ handleClose }
      >
        { modalMode!="sign" && 
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              { title }
            </Modal.Title>
          </Modal.Header>
        }
        <Modal.Body>
          { modalMode == "sign" && <SignForm isSignUpMode={false} /> }
          { modalMode == "createBooking" && page==1 && <Booking1/> }
          { modalMode == "createBooking" && page==2 && <Booking2/> }
          { modalMode == "createBooking" && page==3 && <Booking3/> }
          { modalMode == "listBookings" && <Booking1/> }
        </Modal.Body>
        { modalMode != "sign" &&
            <Modal.Footer className="justify-content-between">
              { modalMode == "createBooking" &&
                <div>
                  <Button className="btn btn-secondary">&lt;&lt; Anterior</Button>
                </div>
              }
              <div>
                <Button onClick={handleClose} className="btn btn-secondary me-3">Cerrar</Button>
                <Button onClick={handleNextClick} className="btn btn-primary">Continuar</Button>
              </div>
            </Modal.Footer>
        }
      </Modal>
  );
}
      
export default MyModal