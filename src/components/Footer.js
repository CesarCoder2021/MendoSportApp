import "./css/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div  className="footer">
            <div className="footer__nav">
                <p>Seguí eligiendo entre nuestras categorías de productos:</p>
                <ul className="footer-container">
                    <Link className='linkNav' to="/category/1">Balones</Link>
                    <Link className='linkNav' to="/category/2">Calzados</Link>
                    <Link className='linkNav' to="/category/3">Accesorios</Link>
                    <Link className='linkNav' to="/category/4">Camisetas</Link>
                </ul>
            </div>
            <div>
                <p>Desarrollado por: CESAR VARETTONI - 2022</p>
            </div>
        </div>
    )
}
export default Footer;
