import { Link } from "react-router-dom";
import "./css/ingreso.css";

const Ingreso = () => {
    return (
        <section className="fotoHead">
            <div className="ingreso">
            <h1 className="tituloHead">Sistema <br/> de Identificación de  <br/> Oficiales Mesa de Control </h1>
            <input className="inputDni">
            </input>
            <Link to="/list">
                <button className="botonHead">Comprobar Habilitación</button>
            </Link>
            </div>
        </section>       
    )
}
export default Ingreso;

