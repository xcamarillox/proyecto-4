import { useEffect, useState } from 'react';
import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";

import { crudServerActions } from "../firebase-aux";
import { makeAToast } from "../modal-screens/toast-maker";
import { getContextType } from "../context/AppContext";

export const ListBookings = () => {
    let [bookingsArr, setBookingsArr] = useState([])
    let [isNeededRetrieveBookings, setIsNeededRetrieveBookings] = useState(true)
    const { currentUser } = getContextType('AuthContext')
    const { makeABooking } = getContextType('ModalContext');
    
    useEffect( async () =>  {
        if (isNeededRetrieveBookings){
            try{
                let dataArr = [];
                let snap = await crudServerActions('getMeDocs',['bookings', currentUser.uid, 'myBookings']);
                snap.forEach((doc) => dataArr.push({...doc.data(), docID: doc.id}));
                setBookingsArr(dataArr)
                setIsNeededRetrieveBookings(false);
            }catch(error){
                console.log(error)
                if (error.code) makeAToast('d', error.code);
                else makeAToast('d', error.message);
            }
        }
    }, [isNeededRetrieveBookings]);

    let handleEraseClick = async (e) => {
        try{
            let index= e.currentTarget.dataset.idx;
            await crudServerActions('deleteADoc',['bookings', currentUser.uid, 'myBookings'], bookingsArr[index].docID);
            setIsNeededRetrieveBookings(true);
            makeAToast('s', 'Reservación Borrada');
        }catch(error){
            console.log(error)
            if (error.code) makeAToast('d', error.code);
            else makeAToast('d', error.message);
        }
    }
    let handleUpdateClick = (e) => {
        let index= e.currentTarget.dataset.idx;
        makeABooking(bookingsArr[index]);
    }
    return (
        <>
            {bookingsArr.length>0 && bookingsArr.map((data, index) => (
                <Card key={index} style={{marginBottom: 20}}>
                    <Card.Header as="h5" className="d-flex justify-content-between">
                        <div>
                            {data.dateSelection} {data.time[0]}:{data.time[1]}
                        </div>
                        <ButtonGroup aria-label="Basic example">
                            <Button variant="secondary" onClick={ handleUpdateClick } data-idx={index} >
                                <FontAwesomeIcon icon={ faPencil } />
                            </Button>
                            <Button variant="secondary" onClick={ handleEraseClick } data-idx={index} >
                            <FontAwesomeIcon icon={ faTrash } />
                            </Button>
                        </ButtonGroup>
                    </Card.Header>
                    <Card.Body>
                     <Card.Title>
                         {data.title} {data.name} {data.lastName} [{data.countryCode} {data.mobileNumber}]
                     </Card.Title>
                     <Card.Text>
                        {data.adultsNumber} Adulto(s), {data.kidsNumber} Niño(s), {data.toddlersNumber} Bebé(s).
                     </Card.Text>
                     <Card.Text> 
                        {data.comments}
                     </Card.Text>
                    </Card.Body>
                </Card>   
            ))}
            {bookingsArr.length==0 &&
                <Alert variant="info">
                    <Alert.Heading>Tal prece que no tienes reservaciones aún...</Alert.Heading>
                    <p>
                      Para realizar una solo debes ir al apartado de reservaciones.
                    </p>
                </Alert>
            }
        </>
    )
}

export default ListBookings

