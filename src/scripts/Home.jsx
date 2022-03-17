import Jumbotron from "./home-sections/Jumbotron";
import OurStory from "./home-sections/OurStory"
import OurMenu from "./home-sections/OurMenu"
import Bookings from "./home-sections/Bookings"
import Menu from "./home-sections/Menu"
import ContactUs from "./home-sections/ContactUs"

const Home =  ({ handleShowModal }) => {
    return (
        <div className="home-cantainer">
            <Jumbotron book={handleShowModal} /> 
            <OurStory />  
            <OurMenu /> 
            <Bookings book={handleShowModal}/>
            <Menu />
            <ContactUs />
        </div>
    )

}
    
export default Home