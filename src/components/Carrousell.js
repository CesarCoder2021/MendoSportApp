import { Link } from "react-router-dom";
import "./css/carrousell.css";

const Carrousell = () => {
    return (
        <section className="fotoHead">
            <h1 className="tituloHead">Para seguir <br/> sintiendo el  <br/> basquetbol en la piel </h1>
            <Link to="/">
                <button className="botonHead">Comprar</button>
            </Link>
        </section>       
    )
}
export default Carrousell;

