import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"

const Booking3 =  (props) => 
(
  <Form>
    {/* <h3 className="text-center">Reservaciones</h3> */}
    <Row>
      <Col md={2}>
        <Form.Group className="mb-2 title" controlId="title">
            <Form.Label>Título</Form.Label>
            <Form.Select aria-label="Default select example">
              <option value="1"></option>
              <option value="2">Sr.</option>
              <option value="3">Sra.</option>
              <option value="4">Srita.</option>
              <option value="5">Dr.</option>
            </Form.Select>
        </Form.Group>
      </Col>
      <Col>
        <Form.Group className="mb-2" controlId="name">
            <Form.Label>Nombre(s)</Form.Label>
            <Form.Control placeholder="Ingresa tu(s) nombre(s)" />
        </Form.Group>
      </Col>
      <Col>
        <Form.Group className="mb-2" controlId="lastName">
            <Form.Label>Apellido(s)</Form.Label>
            <Form.Control placeholder="Ingresa tu(s) apellidos(s)" />
        </Form.Group>
      </Col>
    </Row>
    <Row>
      <Col md={2}>
        <Form.Group className="mb-2" controlId="countryCode">
          <Form.Label>Código del País</Form.Label>
          <Form.Control placeholder="+52"/>
        </Form.Group>
      </Col>
      <Col>
        <Form.Group className="mb-2" controlId="mobileNumber">
          <Form.Label>Numero Celular</Form.Label>
          <Form.Control placeholder="1234567890" />
        </Form.Group>
      </Col>
      <Col>
        <Form.Group className="mb-2" controlId="tipoLinea">
            <Form.Label>Tipo de Línea</Form.Label>
            <Form.Select aria-label="Default select example">
              <option value="1">Celular</option>
              <option value="2">Terrestre</option>
            </Form.Select>
        </Form.Group>
      </Col>
    </Row>
    <Row>
      <Form.Group className="mb-2" controlId="comments">
        <Form.Label>Comentarios</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Dejanos un comentario"
          style={{ height: '100px' }}
        />
      </Form.Group>
    </Row>
  </Form>
)

export default Booking3