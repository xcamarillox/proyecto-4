
import { useState, useRef } from "react";

import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { makeAToast } from '../toast-maker'
import { getContextType } from '../context/AppContext';

const SignForm =  (props) => {
  let [isSignUpMode, setIsSignUpMode] = useState(false);
  const { signActions } = getContextType('AuthContext');
  const { modalData: { isModalShowing, modalMode } , setModalData } = getContextType('ModalContext')
  let handleSignLink = () => setIsSignUpMode(!isSignUpMode);
  const emailRef = useRef();
  const passwordRef = useRef();

  let handleSubmitClick = async (e) => {
    e.preventDefault();
    const signMode = isSignUpMode ? 'signUp' :  'signIn';
    const toastText = isSignUpMode ? 'Usuario creado. Accede.' :  'Bienvenido!!'
    try{
      await signActions(signMode, emailRef.current.value, passwordRef.current.value)
      makeAToast('s', toastText);
      if (isSignUpMode) setIsSignUpMode(!isSignUpMode);
      else setModalData({ isModalShowing: false, modalMode });
    }catch(error){
      console.log(error)
      if (error.code) makeAToast('d', error.code);
      else makeAToast('d', error.message);
    }
  }

  return (
      <Form onSubmit={ handleSubmitClick }>
        <h3 className="text-center">{isSignUpMode ? "REGISTRO" : "ACCESO"}</h3>
        { isSignUpMode && 
          <div>
            <Row>
              <Col md>
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
          <Form.Control type="email" placeholder="Ingresa tu E-mail" ref={emailRef} />
        </Form.Group>
        <Row>
          <Col md>
            <Form.Group className="mb-2" controlId="password">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Ingresa tu Contraseña" ref={passwordRef} />
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
          {isSignUpMode ? "Ya registrado? " : "Aún sin cuenta? "}<Link to='#' onClick={handleSignLink}>{isSignUpMode ? "Accede" : "Crea una"}</Link>
        </p>
      </Form>
  )
}

export default SignForm