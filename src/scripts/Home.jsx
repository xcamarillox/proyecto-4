import MyNavBar from "./home-sections/MyNavBar";
import MyModal from './MyModal.jsx';
import Button from "react-bootstrap/Button";
import Jumbotron from "./home-sections/Jumbotron";
import OurStory from "./home-sections/OurStory"
import OurMenu from "./home-sections/OurMenu"
import Bookings from "./home-sections/Bookings"
import Menu from "./home-sections/Menu"
import ContactUs from "./home-sections/ContactUs"

import { useState } from "react";

const Home =  (props) => {
let [isModalShowing, setIsModalShowing] = useState(false);
let handleShowModal = () => setIsModalShowing(!isModalShowing);
let modalMode = "createBooking";
let showModalData = {
    handleShowModal,
    isModalShowing
}

return (
    <div className="home-cantainer">
        <MyNavBar />
        <Jumbotron book={handleShowModal} /> 
        <OurStory />  
        <OurMenu /> 
        <Bookings book={handleShowModal}/>
        <Menu />
        <ContactUs />
        <MyModal mode={modalMode} display={showModalData} /> 
    </div>
)

}
    
export default Home