import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import SignForm from './modal-screens/SignForm';

import { getContextType } from "./context/AppContext";
import { crudServerActions } from "./firebase-aux";
import { makeAToast } from "./toast-maker";

import Booking1 from './modal-screens/Booking1.jsx';
import Booking2 from './modal-screens/Booking2.jsx';
import Booking3 from './modal-screens/Booking3.jsx';
import BookingSummary from './modal-screens/BookingSummary.jsx';
import ListBookings from './modal-screens/ListBookings';

const MyModal = () => {
  //****************STATE****************//
  const [{ title, page }, setModalSetup ] = useState({ title:"", page: 1 });
  const [ isNextDisabled, setIsNextDisabled ] = useState(false);
  const { currentUser } = getContextType('AuthContext')
  const { 
    modalData:{ isModalShowing, modalMode, initObj }, 
    setModalData, bookingData, setBookingData 
  } = getContextType('ModalContext')

  //****************LIFECYCLE****************//
  useEffect(() => {
    if (initObj)
      setBookingData(initObj)
    else
      setBookingData({ 
        dateSelection: new Date().toISOString().split('T')[0],
        adultsNumber: 1, 
        kidsNumber: 0, 
        toddlersNumber: 0,
        time: [],
        title:"",
        name:"",
        lastName:"",
        countryCode:"",
        mobileNumber:"",
        tipoLinea:'celular',
        comments:""
      });
    setIsNextDisabled(false)
    if (modalMode == "createBooking") setModalSetup({ title:"Nueva Reservación", page: 1 })
    else if (modalMode == "listBookings") setModalSetup({ title:"Lista de Reservaciones", page: 1 }) 
    else if (modalMode == "sign") setModalSetup({ title:"", page: 1 }) 
  }, [isModalShowing, modalMode]);
  
  //****************HANDLERS****************//
  const handleBeforeClick = () => {
    if (page == 2) setIsNextDisabled(false)
    setModalSetup({ title, page: page - 1})
  }
  const handleClose = () => setModalData({ modalMode, isModalShowing: !isModalShowing });
  const handleNextClick = async () => {
    if (page == 1 && modalMode == "createBooking") setIsNextDisabled(true)
    if (page == 4 && modalMode == "createBooking") {
      try{
        if (bookingData.docID) 
        {
          await crudServerActions('updateADoc',['bookings', currentUser.uid, 'myBookings'], [bookingData.docID, bookingData]);
          makeAToast('s', 'Reservación Actualizada');
        } else {
          await crudServerActions('saveADoc',['bookings', currentUser.uid, 'myBookings'], bookingData);
          makeAToast('s', 'Reservación Guardada');
        }
        handleClose();
      }catch(error){
        console.log(error)
        if (error.code) makeAToast('d', error.code);
        else makeAToast('d', error.message);
      }
    }else setModalSetup({ title, page: page + 1 })
  }
 
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
          { modalMode == "sign" && <SignForm /> }
          { modalMode == "createBooking" && page==1 && <Booking1/> }
          { modalMode == "createBooking" && page==2 && <Booking2 setIsNextDisabled={ setIsNextDisabled } /> }
          { modalMode == "createBooking" && page==3 && <Booking3/> }
          { modalMode == "createBooking" && page==4 && <BookingSummary/> }
          { modalMode == "listBookings" && <ListBookings/> }
        </Modal.Body>
        { modalMode != "sign" &&
            <Modal.Footer className={page !=1 && 'justify-content-between'}>
              { (modalMode == "createBooking"  && page>1) &&
                <div>
                  <Button className="btn btn-secondary" onClick={handleBeforeClick}>&lt;&lt; Anterior</Button>
                </div>
              }
              <div>
                <Button onClick={handleClose} className="btn btn-secondary me-3">Cerrar</Button>
                { modalMode != "listBookings" &&
                  <Button onClick={handleNextClick} className="btn btn-primary" disabled={isNextDisabled}>{page !=4  ? 'Continuar': 'Aceptar'}</Button>
                }
              </div>
            </Modal.Footer>
        }
      </Modal>
  );
}
      
export default MyModal