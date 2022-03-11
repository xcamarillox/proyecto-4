import MyNavBar from "./home-sections/MyNavBar";
import MyModal from './MyModal.jsx';
import Button from "react-bootstrap/Button";
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
    <div>
        <MyNavBar />
        <Button variant="primary" onClick={handleShowModal}>
          Show Modal
        </Button>
        <MyModal mode={modalMode} display={showModalData} />
    </div>
)

}
    
export default Home