import CartWidget from "./CartWidget";
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
            <Link to="/" className="brand">
            <a className="navbar-brand" href="#"><img src="logo.svg" alt="" /></a>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mynavbar">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                    <Link to="/categorias/remeras" className="nav-link" href="#">Remeras</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/categorias/zapatillas" className="nav-link" href="#">Zapatillas</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/categorias/buzos" className="nav-link" href="#">Buzos</Link>
                    </li>
                </ul>
                <div><CartWidget/></div>
            </div>
        </div>
    </nav>


  );
};

export default NavBar;
