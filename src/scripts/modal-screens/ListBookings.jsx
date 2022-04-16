import { useEffect, useState } from 'react';
import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { getMeDocs, deleteADoc } from "../firebase-aux";
import { makeAToast } from "../toast-maker";
import { getContextType } from "../context/AppContext";

export const ListBookings = () => {
    let [bookingsArr, setBookingsArr] = useState([])
    let [isNeededRetrieveBookings, setIsNeededRetrieveBookings] = useState(true)
    const { currentUser } = getContextType('AuthContext')
    
    useEffect( async () =>  {
        if (isNeededRetrieveBookings){
            try{
                let dataArr = [];
                let snap = await getMeDocs(['bookings', currentUser.uid, 'myBookings']);
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
            await deleteADoc(['bookings', currentUser.uid, 'myBookings'], bookingsArr[index].docID);
            setIsNeededRetrieveBookings(true);
            makeAToast('s', 'Reservación Borrada');
        }catch(error){
            console.log(error)
            if (error.code) makeAToast('d', error.code);
            else makeAToast('d', error.message);
        }
    }

    return (
        <>
            {bookingsArr.length>0 && bookingsArr.map((data, index) => (
                <Card key={index} style={{marginBottom: 20}}>
                    <Card.Header as="h5" className="d-flex justify-content-between">
                        <div>
                            {data.dateSelection} {data.time[0]}:{data.time[1]}
                        </div>
                        <div>
                            <Button onClick={ handleEraseClick } data-idx={index} variant="secondary">
                                <FontAwesomeIcon icon={ faTrash } />
                            </Button>
                        </div>
                    </Card.Header>
                    <Card.Body>
                     <Card.Title>
                         {data.title} {data.name} {data.lastName} [{data.countryCode} {data.mobileNumber}]
                     </Card.Title>
                     <Card.Text>
                        {data.adultsNumber} Adulto(s), {data.adultsNumber} Niño(s), {data.adultsNumber} Bebé(s).
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

