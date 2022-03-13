import pasta from "../../../assets/pasta.jpg"

const OurMenu =  () => {
    return (
        <div className="slices-container">
            <div className="slice slice2">
                <img className="img-cover" src={pasta} alt=""/>
            </div>
            <div className="slice slice1">
                <div>
                    <h3>Nuestro menú</h3>
                    <p>Nos apasiona la calidad y el origen de todos los ingredientes que utilizamos en nuestros platos, la mayoría de los cuales son ecológicos y con DOP o IGP.</p>
                    <p>Trabajamos en estrecha colaboración con nuestros proveedores locales e italianos para seleccionar cuidadosamente los ingredientes de temporada más frescos y de la más alta calidad y nuestro menú cambia regularmente para reflejar esto.</p>
                </div>
            </div>
        </div>
    ) 
}
        
export default OurMenu