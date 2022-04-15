import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import SignForm from './modal-screens/SignForm';
import { useState, useEffect } from "react";
import Booking1 from './modal-screens/Booking1.jsx';
import Booking2 from './modal-screens/Booking2.jsx';
import Booking3 from './modal-screens/Booking3.jsx';
import { getContextType } from "./context/AppContext";
import { saveADoc, getMeDocs } from "./firebase-aux";
import { makeAToast } from "./toast-maker";

const MyModal = () => {
  //****************STATE****************//
  const [{ title, page }, setModalSetup ] = useState({ title:"", page: 1 });
  const [ isNextDisabled, setIsNextDisabled ] = useState(false);
  const { currentUser } = getContextType('AuthContext')
  const { 
    modalData:{ isModalShowing, modalMode }, 
    setModalData, bookingData, setBookingData 
  } = getContextType('ModalContext')
  //****************HANDLERS****************//
  const handleBeforeClick = () => {
    if (page == 2) setIsNextDisabled(false)
    setModalSetup({ title, page: page - 1})
  }
  const handleClose = () => setModalData({ modalMode, isModalShowing: !isModalShowing });
  const handleNextClick = async () => {
    if (page == 1) setIsNextDisabled(true)
    if (page == 3) {
      try{
        await saveADoc(['bookings', currentUser.uid, 'myBookings'], bookingData)
        /////////GETDATA//////////
        let dataArr = [];
        let snap = await getMeDocs(['bookings', currentUser.uid, 'myBookings']);
        snap.forEach((doc) => dataArr.push({...doc.data(), docID: doc.id}));
        console.log(dataArr);
        /////////GETDATA//////////
        makeAToast('s', 'Reservación Guardada');
      }catch(error){
        console.log(error)
        if (error.code) makeAToast('d', error.code);
        else makeAToast('d', error.message);
      }
    }
    setModalSetup({ title, page: page + 1 })
  }
 
  //****************LIFECYCLE****************//
  useEffect(() => {
    setBookingData({ 
      dateSelection: new Date().toISOString().split('T')[0],
      adultsNumber: 1, 
      kidsNumber: 0, 
      toddlersNumber: 0,
      time: [],
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
  }, [isModalShowing]);

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
          { modalMode == "listBookings" && <Booking1/> }
        </Modal.Body>
        { modalMode != "sign" &&
            <Modal.Footer className="justify-content-between">
              { modalMode == "createBooking" &&
                <div>
                  <Button className="btn btn-secondary" onClick={handleBeforeClick} disabled={page < 2}>&lt;&lt; Anterior</Button>
                </div>
              }
              <div>
                <Button onClick={handleClose} className="btn btn-secondary me-3">Cerrar</Button>
                <Button onClick={handleNextClick} className="btn btn-primary" disabled={isNextDisabled}>Continuar</Button>
              </div>
            </Modal.Footer>
        }
      </Modal>
  );
}
      
export default MyModal