import React from "react"; 
import logo from "../Logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const navbar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <a className = "navbar-brand1"><img className ="logo rounded" src = {logo} alt = "logo..." /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} style = {{color: "#f9ab00"}}/>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link"><Link to = "/" className ="nav-text"> Home </Link></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link"><Link to = "/About" className ="nav-text"> Sobre mi </Link></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link"><Link to = "/Proyectos" className ="nav-text"> Proyectos </Link> </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link"><Link to = "/Contacto" className ="nav-text"> Contacto </Link></a>
                </li>
                </ul>
            </div>
    </nav>
    )
}

export default navbar
