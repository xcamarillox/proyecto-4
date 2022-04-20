
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import googleIcon from "../../../assets/google_icon.png"

import { signServerActions } from '../firebase-aux'
import { makeAToast } from '../modal-screens/toast-maker'
import { getContextType } from '../context/AppContext';

const SignForm =  () => {
  let [modalSignMode, setModalSignMode] = useState('signIn');
  const { modalData: { isModalShowing, modalMode } , setModalData } = getContextType('ModalContext')
  const emailRef = useRef();
  const passwordRef = useRef();
  
  let handleSignLink = () => modalSignMode=='signIn' ? setModalSignMode('signUp') : setModalSignMode('signIn');
  const handleForgotLink= async () => setModalSignMode('signForgot');
  const handleSignAction= async (e) => {
    e.preventDefault();
    let toastText;
    if (modalSignMode == 'signUp') toastText = 'Usuario creado. Accede.';
    else if (modalSignMode == 'signIn') toastText =  'Bienvenido!!';
    else if (modalSignMode == 'signForgot') toastText =  'Correo de recuperación enviado!! Revisa tu correo';
    let serverParams = [
      e.type == "submit" ? modalSignMode : 'signGoogle', 
      emailRef.current.value, 
      modalSignMode != 'signForgot' ? passwordRef.current.value : ''
    ]
    try{
      let response = await signServerActions(...serverParams);
      makeAToast('s', toastText);
      if (modalSignMode != 'signIn' ) setModalSignMode('signIn');
      else setModalData({ isModalShowing: false, modalMode });
    }catch(error){
      console.log(error)
      if (error.code) makeAToast('d', error.code);
      else makeAToast('d', error.message);
    }
  }

  return (
      <Form onSubmit={ handleSignAction }>
        <h3 className="text-center"  style={{ marginBottom: 50 }}>
          { modalSignMode=='signIn'  && "ACCEDE" }
          { modalSignMode=='signUp'  && "REGISTRO" }
          { modalSignMode=='signForgot'  && "RECUPERACIÓN DE CONTRASEÑA" }
        </h3> 
        { modalSignMode=='signUp' && 
          <div>
            <Row>
              <Col md>
                <Form.Group className="mb-2 title" controlId="title">
                    <Form.Label>Título</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option value=""></option>
                      <option value="SR.">Sr.</option>
                      <option value="SRA.">Sra.</option>
                      <option value="SRITA.">Srita.</option>
                      <option value="DR.">Dr.</option>
                    </Form.Select>
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group className="mb-2" controlId="name">
                    <Form.Label>Nombre(s) *</Form.Label>
                    <Form.Control placeholder="Ingresa tu(s) nombre(s)" />
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group className="mb-2" controlId="lastName">
                    <Form.Label>Apellido(s) *</Form.Label>
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
                  <Form.Label>Núm. de Teléfono *</Form.Label>
                  <Form.Control placeholder="1234567890" />
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group className="mb-2" controlId="lineType">
                    <Form.Label>Tipo de Línea</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option value="celular">Celular</option>
                      <option value="terrestre">Terrestre</option>
                    </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </div>
        }
        <Form.Group className="mb-2" controlId="email">
          <Form.Label>E-mail { modalSignMode=='signUp'? '*' : ''}</Form.Label>
          <Form.Control type="email" placeholder="Ingresa tu E-mail" ref={emailRef} />
        </Form.Group>
        <Row>
          { modalSignMode!='signForgot' &&
            <Col md>
              <Form.Group className="mb-2" controlId="password">
                <Form.Label>Contraseña { modalSignMode=='signUp'? '*' : ''}</Form.Label>
                <Form.Control type="password" placeholder="Ingresa tu Contraseña" ref={passwordRef} />
              </Form.Group>
            </Col>
          }
          { modalSignMode=='signUp' &&
            <Col md>
              <Form.Group className="mb-2" controlId="passwordConfirm">
                <Form.Label>Confirma tu Contraseña *</Form.Label>
                <Form.Control type="password" placeholder="Confirma tu Contraseña" />
              </Form.Group>
            </Col>
          }
        </Row>
        {modalSignMode=='signIn' &&
          <p className="text-center">
             <Link to='#' onClick={ handleForgotLink }>Olvidaste tu contraseña?</Link>
          </p>
        }
        <div className="d-grid gap-2">
          <Button type="submit" variant="primary">
            {modalSignMode=='signIn' && "Acceder"}
            {modalSignMode=='signUp' && "Registrarme"}
            {modalSignMode=='signForgot' && "Recuperar"}
          </Button>
          <p className="text-center">
            {modalSignMode=='signIn' && "Aún sin cuenta? "}
            {modalSignMode=='signUp' && "Ya registrado? "}
            {modalSignMode=='signForgot' && "Falsa Alarma? "}
            <Link to='#' onClick={handleSignLink}>
              {modalSignMode=='signIn' && "Crea una acá"}
              {modalSignMode=='signUp' && "Accede acá"}
              {modalSignMode=='signForgot' && "Accede acá"}
            </Link>
          </p>
          {modalSignMode=='signIn' &&
            <div className="d-grid gap-2 text-center">
              Tambien puedes acceder con:
              <Button variant="btn btn-outline-secondary" onClick={ handleSignAction }>
                <img className="" src={googleIcon} alt=""/> Google
              </Button>
            </div>
          }
        </div>
      </Form>
  )
}

export default SignForm