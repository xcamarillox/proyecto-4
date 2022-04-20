import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { getContextType } from "../context/AppContext"

const Booking1 =  () => {
  const { bookingData, setBookingData } = getContextType('ModalContext');

  let handleChangeOnControl = (e) => {
    let currentBooking = { ...bookingData }
    currentBooking[e.target.id] = e.target.value
    setBookingData(currentBooking);
  }
 
  return (
    <Form>
      <Row>
        <Col>
          <Form.Group className="mb-2" controlId="dateSelection">
              <Form.Label>Selección de Fecha:</Form.Label>
              <Form.Control type="date" 
                placeholder="Ingresa tu(s) nombre(s)" 
                min={ new Date().toISOString().split('T')[0] }
                onChange={ handleChangeOnControl } 
                value={ bookingData.dateSelection } />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col sm>
          <Form.Group className="mb-2" controlId="adultsNumber">
              <Form.Label>Núm. de Adultos (12+):</Form.Label>
              <Form.Select aria-label="Default select example" onChange={ handleChangeOnControl } value={ bookingData.adultsNumber }>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </Form.Select>
          </Form.Group>
        </Col>
        <Col sm>
          <Form.Group className="mb-2" controlId="kidsNumber">
              <Form.Label>Núm. de Niños (4 - 12):</Form.Label>
              <Form.Select aria-label="Default select example" onChange={ handleChangeOnControl } value={ bookingData.kidsNumber }>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </Form.Select>
          </Form.Group>
        </Col>
        <Col sm>
          <Form.Group className="mb-2" controlId="toddlersNumber">
              <Form.Label>Núm. de Bebés (0 - 3):</Form.Label>
              <Form.Select aria-label="Default select example" onChange={ handleChangeOnControl } value={ bookingData.toddlersNumber }>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </Form.Select>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  )
}

export default Booking1