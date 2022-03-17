
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";

import { Switch, Route, Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCircleUser} from "@fortawesome/free-solid-svg-icons";

const MyNavBar =  (props) => {
let [bg, setBg] = useState("");
const icon = <FontAwesomeIcon icon={faCircleUser} />

useEffect(() => {
  window.addEventListener("scroll", function(){
    if (window.scrollY > 0) setBg("dark");
    else setBg("");
  })
}, [])


return (
  <header>
    <Navbar  className="navbar-animation" collapseOnSelect fixed="top" bg={bg} variant="dark" expand="lg">
      <Container>
      <Navbar.Brand href="#home"><h1 className="titulo">APPETITOSO</h1></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          {/* <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link> */}
        </Nav>
        <Nav>
          {/* <Nav.Link eventKey={2} href="#memes">Dank memes</Nav.Link> */}
          <Nav.Link as={HashLink} smooth to='/home#our-story'>Nuestra Historia</Nav.Link>
          <Nav.Link as={HashLink} smooth to='/home#our-menu'>Nuestro Menú</Nav.Link>
          <Nav.Link as={HashLink} smooth to='/home#bookings'>Reservaciones</Nav.Link>
          <Nav.Link as={HashLink} smooth to='/home#menu'>Ordenar</Nav.Link>
          <Nav.Link as={HashLink} smooth to='/home#contact-us'>Contacto</Nav.Link>
          <Nav.Link as={HashLink} smooth to='/blog'>Blog</Nav.Link>
          { !props.isUserLogged && 
            <Nav.Link onClick={props.handleShowModal} className="nowrap" id="navbar-login" >
              <FontAwesomeIcon icon={faUser} /> Acceder
            </Nav.Link>
          }
          { props.isUserLogged &&
            <NavDropdown title={<FontAwesomeIcon icon={faCircleUser} className="fa-xl" />} id="collasible-nav-dropdown">
              <NavDropdown.Item>Mi Perfil</NavDropdown.Item>
              <NavDropdown.Item>Mis pedidos</NavDropdown.Item>
              <NavDropdown.Item as={HashLink}>Mis reservaciones</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={HashLink}>Cerrar Sesión</NavDropdown.Item>
            </NavDropdown>
          }
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
)

}

export default MyNavBar