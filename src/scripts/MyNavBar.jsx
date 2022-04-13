
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCircleUser} from "@fortawesome/free-solid-svg-icons";

import { HashLink } from 'react-router-hash-link';
import { useState, useEffect } from "react";

import { getContextType } from "./context/AppContext"
import { makeAToast } from './toast-maker'

const MyNavBar =  (props) => {

  let [navbarBgColor, setNavbarBgColor] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", function(){
      if (window.scrollY > 0) setNavbarBgColor("dark");
      else setNavbarBgColor("");
    })
  }, [])

  const { modalData: { isModalShowing, modalMode } , setModalData } = getContextType('ModalContext')
  const { currentUser, signActions } = getContextType('AuthContext')
  let handleShowModal = () => {
    setModalData({ isModalShowing: !isModalShowing, modalMode: "sign" });
  };
  let closeSessionHandle = async () => {
    try{
      await signActions('signOut')
      makeAToast('s', 'Cerraste Sesión');
    }catch(error){
      console.log(error)
      if (error.code) makeAToast('d', error.code);
      else makeAToast('d', error.message);
    }
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
            { !currentUser && 
              <Nav.Link onClick={ handleShowModal } className="nowrap" id="navbar-login" >
                <FontAwesomeIcon icon={ faUser } /> Acceder
              </Nav.Link>
            }
            { currentUser &&
              <NavDropdown title={<FontAwesomeIcon icon={ faCircleUser } className="fa-xl" />} id="collasible-nav-dropdown">
                <NavDropdown.Item>Mi Perfil</NavDropdown.Item>
                <NavDropdown.Item>Mis pedidos</NavDropdown.Item>
                <NavDropdown.Item as={ Button }  onClick={closeSessionHandle} >Mis reservaciones</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={ Button }  onClick={closeSessionHandle} >Cerrar Sesión</NavDropdown.Item>
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