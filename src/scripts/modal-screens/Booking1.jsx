import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"

const Booking1 =  (props) => 
(
  <Form>
    {/* <h3 className="text-center">Reservaciones</h3> */}
    <Row>
      <Col>
        <Form.Group className="mb-2" controlId="dateSelection">
            <Form.Label>Selección de Fecha:</Form.Label>
            <Form.Control type="date" placeholder="Ingresa tu(s) nombre(s)" />
        </Form.Group>
      </Col>
    </Row>
    <Row>
      <Col>
        <Form.Group className="mb-2" controlId="adultsNumber">
            <Form.Label>Numero de Adultos (12+):</Form.Label>
            <Form.Select aria-label="Default select example">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="2">4</option>
              <option value="3">5</option>
              <option value="3">6</option>
            </Form.Select>
        </Form.Group>
      </Col>
      <Col>
        <Form.Group className="mb-2" controlId="kidsNumber">
            <Form.Label>Numero de Niños (4 - 12):</Form.Label>
            <Form.Select aria-label="Default select example">
              <option value="1">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="2">4</option>
              <option value="3">5</option>
              <option value="3">6</option>
            </Form.Select>
        </Form.Group>
      </Col>
      <Col>
        <Form.Group className="mb-2" controlId="toddlersNumber">
            <Form.Label>Numero de Bebés (0 - 3):</Form.Label>
            <Form.Select aria-label="Default select example">
              <option value="1">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="2">4</option>
              <option value="3">5</option>
              <option value="3">6</option>
            </Form.Select>
        </Form.Group>
      </Col>
    </Row>
    {/* <div className="d-grid gap-2">
      <Button type="submit" variant="primary">
        Reservar
      </Button>
    </div> */}
  </Form>
)

export default Booking1