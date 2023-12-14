
import { Link } from "react-router-dom";

const NavBar = () =>{
    return(
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item">
                    <Link to="/" className="nav-link"> Inicio</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link"> Sobre</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;