import kitchen from "../../../assets/kitchen.jpg"

const OurStory =  () => {
    return (
        <div className="slices-container">
            <div className="slice">
                <div>
                    <h3>Nuestra historia</h3>
                    <p>Appetitoso es una osteria-pizzería contemporánea en el corazón de San Pedro Garza García, México. Trabajamos con los mejores productos locales e italianos para ofrecer las auténticas tradiciones culinarias de Italia.</p>
                    <p>Todos nuestros platos se elaboran en el lugar con ingredientes de temporada de calidad y se sirven junto con una selección de cervezas artesanales italianas, vinos y cócteles tradicionales.</p>
                </div>
            </div>
            <div className="slice">
                <img className="img-cover" src={kitchen} alt=""/>
            </div>
        </div>
    ) 
}
        
export default OurStory