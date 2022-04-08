import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom'; //HashRouter replaces BrowserRouter
import 'bootstrap/dist/css/bootstrap.min.css';
import "toastify-js/src/toastify.css"
import '../styles/index.css';
import '../styles/main.css';
import App from './App.jsx';


ReactDOM.render(
  <React.StrictMode>
    <Router>
        <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);