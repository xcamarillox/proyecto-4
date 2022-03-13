import { useState } from "react";
import Image from 'react-bootstrap/Image'
import pizza from "../../../assets/pizza.jpg"

const Jumbotron =  (props) => {
    let [isModalShowing, setIsModalShowing] = useState(false);
    return (
        <div className="img-overlay-container">
            <img className="img-cover opacity-50" src={pizza} alt=""/>
            <div className="jumbotron-overlay">
                Abierto para cenas en el interior y pedidos Click & Collect
            </div>
        </div>
    )
    
    }
        
    export default Jumbotron