import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
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