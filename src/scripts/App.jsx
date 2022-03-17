
import NavBar from './MyNavBar';
import Home from './Home';
import Blog from './Blog.jsx';
import Modal from './MyModal.jsx';
import { useState } from 'react';
const App =  () => {

    let [isModalShowing, setIsModalShowing] = useState(false);
    let handleShowModal = () => setIsModalShowing(!isModalShowing);
    let modalMode = "createBooking";
    let showModalData = {
        handleShowModal,
        isModalShowing
    }
    return (
        <div className="app-cantainer">
            <NavBar />
            <Home handleShowModal={handleShowModal} />
            <Blog />
            <Modal mode={modalMode} display={showModalData} />
        </div>
    );
}
export default App