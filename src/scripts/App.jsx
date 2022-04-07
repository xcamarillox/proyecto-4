
import NavBar from './MyNavBar';
import Home from './Home';
import Blog from './Blog.jsx';
import Modal from './MyModal.jsx';
import { useState } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { AppProvider } from "./context/AppContext.jsx"
const App =  () => {
    return (
        <AppProvider>
            <NavBar  />
            <Switch>
                <Route path="/home" exact>
                    <Home />
                </Route>
                <Route path="/blog" exact>
                    <Blog />
                </Route>
                <Route path="/">
                    <Redirect to="/home" />
                </Route>
            </Switch>
            <Modal />
        </AppProvider>
    );
}
export default App