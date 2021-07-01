import React from "react"
import Typed from "react-typed"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const header = () => {
    return (
        <div className ="header-wraper">
            <div className = "fade-in-text">
            <div className = "main-info">
                <h1 className = "titulo-principal"><b>Hola, <br></br>Mi nombre es <br></br> <span className ="nombre">Milton Fernández </span></b></h1>
            
            <Typed
            className="Typed-text"
            strings={["Desarrollador web", "Técnico electrónico", "Estudiante de ingenieria informática"]}
            typeSpeed = {100}
            backSpeed={75}
            loop
            />
            <br></br>
            <span className = "Iconos">
            <a className = "Linkedin" href= "https://www.linkedin.com/in/milton-fernandez-b259111b6/" target ="_blank"><i class="fab fa-linkedin"></i></a>
            <a className = "gitlab" href = "https://gitlab.com/Milton1254" target ="_blank"><i class="fab fa-gitlab"></i></a>
            <a className = "github" href = "https://github.com/MIltonFernandez" target="_blank"><i class="fab fa-github"></i></a>
            <a className = "Iconos work" ><Link to = "/Proyectos"><i class="fas fa-briefcase"></i></Link></a>
            </span>
            </div>
            </div>
        </div>
        )
}

export default header
