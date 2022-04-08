
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCircleUser} from "@fortawesome/free-solid-svg-icons";

import { HashLink } from 'react-router-hash-link';
import { useState, useEffect, useContext } from "react";

import { ModalContext } from "./context/AppContext"

const MyNavBar =  (props) => {

  let [navbarBgColor, setNavbarBgColor] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", function(){
      if (window.scrollY > 0) setNavbarBgColor("dark");
      else setNavbarBgColor("");
    })
  }, [])

  const { modalData: { isModalShowing, modalMode } , setModalData } = useContext(ModalContext)
  let handleShowModal = () => {
    setModalData({ isModalShowing: !isModalShowing, modalMode: "sign" });
  };

  return (
    <header>
      <Navbar  className="navbar-animation" collapseOnSelect fixed="top" bg={ navbarBgColor } variant="dark" expand="lg">
        <Container>
        <Navbar.Brand as={ HashLink } smooth to="/home#top"><h1 className="titulo">APPETITOSO</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
          <Nav>
            {/* <Nav.Link eventKey={2} href="#memes">Dank memes</Nav.Link> */}
            <Nav.Link as={ HashLink } smooth to='/home#our-story'>Nuestra Historia</Nav.Link>
            <Nav.Link as={ HashLink } smooth to='/home#our-menu'>Nuestro Menú</Nav.Link>
            <Nav.Link as={ HashLink } smooth to='/home#bookings'>Reservaciones</Nav.Link>
            <Nav.Link as={ HashLink } smooth to='/home#menu'>Ordenar</Nav.Link>
            <Nav.Link as={ HashLink } smooth to='/home#contact-us'>Contacto</Nav.Link>
            <Nav.Link as={ HashLink } smooth to='/blog#top'>Blog</Nav.Link>
            { !props.isUserLogged && 
              <Nav.Link onClick={ handleShowModal } className="nowrap" id="navbar-login" >
                <FontAwesomeIcon icon={ faUser } /> Acceder
              </Nav.Link>
            }
            { props.isUserLogged &&
              <NavDropdown title={<FontAwesomeIcon icon={ faCircleUser } className="fa-xl" />} id="collasible-nav-dropdown">
                <NavDropdown.Item>Mi Perfil</NavDropdown.Item>
                <NavDropdown.Item>Mis pedidos</NavDropdown.Item>
                <NavDropdown.Item as={ HashLink }>Mis reservaciones</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={ HashLink }>Cerrar Sesión</NavDropdown.Item>
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