import CartWidget from "./CartWidget";
import "./navbar.css"
const NavBar = () => {
    return (
        <div>
            <h2>Tienda Arte</h2>
        <nav className="navbar">
            <ul className="navbar-menu">
                <li className="navbar-item">INICIO</li>
                <li className="navbar-item">TIENDA</li>
                <li className="navbar-item">OBRAS DESTACADAS</li>
                <li className="navbar-item">CONTACTO</li>
            </ul>
            <CartWidget/>
        </nav>
        </div>
    );
}

export default NavBar;