import { useState } from "react";
import Image from 'react-bootstrap/Image'
import pizza from "../../../assets/pizza.jpg"
import Button from "react-bootstrap/Button";

const Jumbotron =  (props) => {
    let [isModalShowing, setIsModalShowing] = useState(false);
    return (
        <div className="jumbotron-container" id="top">
            <div className="jumbotron-overlay">
                <h1>
                    Abierto para cenas en el interior y pedidos por Rappi
                </h1>
                <div>
                    <Button variant="outline-light" onClick={props.book} size="lg" id="jumbotron-book">
                        Reservar
                    </Button>
                    <Button 
                        variant="outline-light" 
                        size="lg"
                        onClick={(e) => 
                        {
                            e.preventDefault();
                            window.location.href='https://www.rappi.com.mx/';
                        }}>
                        Ordenar
                    </Button>
                </div>
            </div>
        </div>
    )
    
    }
        
    export default Jumbotron