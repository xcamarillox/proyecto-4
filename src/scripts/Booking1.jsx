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
    <h3 className="text-center">Reservaciones</h3>
    <Row>
      <Col>
        <Form.Group className="mb-2" controlId="nombre">
            <Form.Label>Nombre(s)</Form.Label>
            <Form.Control type="date" placeholder="Ingresa tu(s) nombre(s)" />
        </Form.Group>
      </Col>
      <Col>
        <Form.Group className="mb-2" controlId="nombre">
            <Form.Label>Nombre(s)</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
        </Form.Group>
      </Col>
    </Row>
    <Row>
      <Col>
        <Form.Group className="mb-2" controlId="nombre">
            <Form.Label>Nombre(s)</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
        </Form.Group>
      </Col>
      <Col>
        <Form.Group className="mb-2" controlId="nombre">
            <Form.Label>Nombre(s)</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
        </Form.Group>
      </Col>
    </Row>
    <div className="d-grid gap-2">
      <Button type="submit" variant="primary">
        Reservar
      </Button>
    </div>
  </Form>
)

export default Booking1