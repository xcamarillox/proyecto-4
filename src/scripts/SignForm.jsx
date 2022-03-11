
import { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Booking3 from './Booking3.jsx';

const Booking1 =  (props) => {
let [isSignUpMode, setIsSignUpMode] = useState(props.isSignUpMode);
let handleClick = () => {
  setIsSignUpMode(!isSignUpMode)
}
return (
    <Form>
      <h3 className="text-center">{isSignUpMode ? "REGISTRO" : "ACCESO"}</h3>
      { isSignUpMode && 
        <div>
          <Row>
            <Col md>
              <Form.Group className="mb-2 title" controlId="title">
                  <Form.Label>Titulo</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option value="1">Sr.</option>
                    <option value="2">Sra.</option>
                    <option value="3">Srita.</option>
                    <option value="2">Dr.</option>
                  </Form.Select>
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group className="mb-2" controlId="name">
                  <Form.Label>Nombre(s)</Form.Label>
                  <Form.Control placeholder="Ingresa tu(s) nombre(s)" />
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group className="mb-2" controlId="lastName">
                  <Form.Label>Apellido(s)</Form.Label>
                  <Form.Control placeholder="Ingresa tu(s) apellido(s)" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md>
              <Form.Group className="mb-2" controlId="countryCode">
                <Form.Label>Código de País</Form.Label>
                <Form.Control placeholder="+52" />
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group className="mb-2" controlId="mobileNumber">
                <Form.Label>Numero Celular</Form.Label>
                <Form.Control placeholder="1234567890" />
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group className="mb-2" controlId="lineType">
                  <Form.Label>Tipo de Línea</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option value="1">Celular</option>
                    <option value="2">Terrestre</option>
                  </Form.Select>
              </Form.Group>
            </Col>
          </Row>
        </div>
      }
      <Form.Group className="mb-2" controlId="email">
        <Form.Label>E-mail</Form.Label>
        <Form.Control type="email" placeholder="Ingresa tu E-mail" />
      </Form.Group>
      <Row>
        <Col md>
          <Form.Group className="mb-2" controlId="password">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Ingresa tu Contraseña" />
          </Form.Group>
          { !isSignUpMode && 
            <Form.Group className="mb-2" controlId="rememberMe">
              <Form.Check type="checkbox" label="Recuerdame" />
            </Form.Group>
          }
        </Col>
        { isSignUpMode && 
          <Col md>
            <Form.Group className="mb-2" controlId="passwordConfirm">
              <Form.Label>Confirma tu Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Confirma tu Contraseña" />
            </Form.Group>
          </Col>
        }
      </Row>
      <div className="d-grid gap-2">
        <Button type="submit" variant="primary">
          {isSignUpMode ? "Registrame" : "Acceder"}
        </Button>
      </div>
      <p className="forgot-password text-end">
      {isSignUpMode ? "Ya registrado? " : "Aún sin cuenta? "}<Link to='#' onClick={handleClick}>{isSignUpMode ? "Accede" : "Crea una"}</Link>
      </p>
    </Form>
)
}

export default Booking1