import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Logo</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mynavbar">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                    <a className="nav-link" href="#">Remeras</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Zapatillas</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Buzos</a>
                    </li>
                </ul>
                <div><CartWidget/></div>
            </div>
        </div>
    </nav>
  )
}

export default NavBar
