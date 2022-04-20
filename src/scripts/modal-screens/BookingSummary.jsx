import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";

import { getContextType } from "../context/AppContext"


const BookingSummary = () => {
    const { bookingData, setBookingData } = getContextType('ModalContext');

    return (
    <>
            <Card style={{marginBottom: 20}}>
                <Card.Header as="h5">
                    RESUMEN
                </Card.Header>
                <Card.Header as="h5">
                    {bookingData.dateSelection} {bookingData.time[0]}:{bookingData.time[1]}
                </Card.Header>
                <Card.Body>
                 <Card.Title>
                     {bookingData.title} {bookingData.name} {bookingData.lastName} [{bookingData.countryCode} {bookingData.mobileNumber}]
                 </Card.Title>
                 <Card.Text>
                    {bookingData.adultsNumber} Adulto(s), {bookingData.kidsNumber} Niño(s), {bookingData.toddlersNumber} Bebé(s).
                 </Card.Text>
                 <Card.Text>
                    {bookingData.comments}
                 </Card.Text>
                </Card.Body>
            </Card>   
            
            <Alert variant="info">
                <Alert.Heading>Política de reserva de Appetitoso</Alert.Heading>
                <p> 
                    En Appetitoso podemos acomodar hasta 50 invitados, para asegurarnos de que reciba el mejor nivel de servicio de nuestra parte, le pedimos que una vez que haya asegurado una reserva en un horario en particular, se adhiera a ese horario.
                    Si llega más de 20 minutos después de la hora de su reserva sin previo aviso, puede perder su mesa para otro grupo.
                </p>
                <p>
                    Si se hace una reserva, normalmente no le pedimos que desocupe una mesa. Sin embargo, en las horas punta, es posible que tengamos que limitar su reserva a 75 minutos para mesas de hasta 4 personas y 90 minutos para grupos de 5 o más.
                    Los grupos de 7 o más invitados pueden reservar una mesa con anticipación contactando directamente al equipo.
                </p>
                <p>Teléfono: 8181234567 </p>
                <p>Correo electrónico: <a href = "mailto: reservas@appetitoso.com.mx">reservas@appetitoso.com.mx</a></p>
                <p>    
                    El equipo del restaurante asigna las mesas el día y, aunque haremos todo lo posible para asignar una mesa en su área preferida del comedor, no siempre podemos garantizarlo.
                </p>
            </Alert>
    </>
    )
}

export default BookingSummary

