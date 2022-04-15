import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { useState, useEffect, useRef } from "react";

import { getContextType } from "../context/AppContext"

const Booking3 =  (props) => {
  const { bookingData, setBookingData } = getContextType('ModalContext');
  let handleChangeOnControl = (e) => {
    let currentBooking = { ...bookingData };
    currentBooking[e.target.id] = e.target.value;
    setBookingData(currentBooking);
  } 
  return (
    <Form>
      <Row>
        <Col md>
          <Form.Group className="mb-2 title" controlId="title">
              <Form.Label>Título</Form.Label>
              <Form.Select aria-label="Default select example" value={ bookingData.title } onChange={ handleChangeOnControl }>
                <option value=""></option>
                <option value="sr">Sr.</option>
                <option value="sra">Sra.</option>
                <option value="srita">Srita.</option>
                <option value="dr">Dr.</option>
              </Form.Select>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-2" controlId="name">
              <Form.Label>Nombre(s)</Form.Label>
              <Form.Control placeholder="Ingresa tu(s) nombre(s)" value={ bookingData.name } onChange={ handleChangeOnControl } />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-2" controlId="lastName">
              <Form.Label>Apellido(s)</Form.Label>
              <Form.Control placeholder="Ingresa tu(s) apellidos(s)" value={ bookingData.lastName } onChange={ handleChangeOnControl } />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md>
          <Form.Group className="mb-2" controlId="countryCode">
            <Form.Label>Código del País</Form.Label>
            <Form.Control placeholder="+52"value={ bookingData.countryCode } onChange={ handleChangeOnControl } />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-2" controlId="mobileNumber">
            <Form.Label>Numero Celular</Form.Label>
            <Form.Control placeholder="1234567890" value={ bookingData.mobileNumber } onChange={ handleChangeOnControl } />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-2" controlId="tipoLinea">
              <Form.Label>Tipo de Línea</Form.Label>
              <Form.Select aria-label="Default select example" value={ bookingData.tipoLinea } onChange={ handleChangeOnControl }>
                <option value="celular">Celular</option>
                <option value="terrestre">Terrestre</option>
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
            value={ bookingData.comments } 
            onChange = { handleChangeOnControl }
          />
        </Form.Group>
      </Row>
    </Form>
  )
}

export default Booking3