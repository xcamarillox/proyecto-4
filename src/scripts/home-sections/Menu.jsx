import { Dishes } from "./Dishes";
import Button from "react-bootstrap/Button";

const Menu =  (props) => {
    return (
        <div className="menu-container">
            <div className="menu-header">
                <div>
                    <h3>Ordena</h3>
                    <p>Puedes cenar en nuestro restaurante o pedir una pizza para llevar a través de <a href="https://www.rappi.com/">Rappi</a></p>
                </div>
            </div>
            <div className="menu-content">
                { Dishes.map((dish, index) => (
                    <div className="menu-dish" key={index}>
                        <div className="dish-title">
                            <h5 className="dish">{dish.name}</h5> 
                            <h5 className="price">{dish.price}</h5>
                        </div>
                        <p>{dish.desc}</p>
                    </div>
                ))}
            </div>
            <div className="menu-footer">
                <div>
                    <p>Nos reservamos el derecho de cambiar los ingredientes enumerados anteriormente en función de la disponibilidad. (v) = vegetariano (vg) = vegano.</p>
                    <Button variant="outline-dark" size="lg">
                        Ordenar
                    </Button>
                </div>
            </div>
        </div>
    ) 
}
        
export default Menu