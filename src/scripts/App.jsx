
import NavBar from './MyNavBar';
import Home from './Home';
import Blog from './Blog.jsx';
import Modal from './MyModal.jsx';
import { useState } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
const App =  () => {

    let [isModalShowing, setIsModalShowing] = useState(false);
    let [isUserLogged, setIsUserLogged] = useState(false);
    let [modalMode, setModalMode] = useState("sign");
    //let modalMode = "sign";
    let handleShowModal = (e) => {
        if (!isModalShowing) {
            if (e.target.id == "navbar-login") setModalMode("sign")
            else setModalMode("createBooking");
        }
        setIsModalShowing(!isModalShowing)
    };
    let showModalData = {
        handleShowModal,
        isModalShowing
    }
    return (
        <div className="app-cantainer">
            <NavBar isUserLogged={isUserLogged} handleShowModal={handleShowModal} />
            <Switch>
                <Route path="/home" exact>
                    <Home handleShowModal={handleShowModal} />
                </Route>
                <Route path="/blog" exact>
                    <Blog />
                </Route>
                <Route path="/">
                    <Redirect to="/home" />
                </Route>
            </Switch>
            <Modal mode={modalMode} display={showModalData} />
        </div>
    );
}
export default App