
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
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
      <Navbar.Brand href="#home" className="titulo"><h1>APPETITOSO</h1></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          {/* <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link> */}
        </Nav>
        <Nav>
          {/* <Nav.Link eventKey={2} href="#memes">Dank memes</Nav.Link> */}
          <Nav.Link href="#deets">Nuestra Historia</Nav.Link>
          <Nav.Link href="#deets">Nuestro Menú</Nav.Link>
          <Nav.Link href="#deets">Reservaciones</Nav.Link>
          <Nav.Link href="#deets">Ordenar</Nav.Link>
          <Nav.Link href="#deets">Blog</Nav.Link>
          <Nav.Link href="#deets"><FontAwesomeIcon icon={faUser} /> Acceder</Nav.Link>
          <NavDropdown title={<FontAwesomeIcon icon={faCircleUser} className="fa-xl" />} id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Mi Perfil</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Mis pedidos</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Mis reservaciones</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Cerrar Sesión</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
)

}

export default MyNavBar