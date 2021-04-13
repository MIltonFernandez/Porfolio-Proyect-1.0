import React, { Component } from 'react';
import Resume from '../components/img/CV - Milton Fernández.pdf';
import Foto_perfil from '../components/img/Foto perfil blanco 1.png';
import Button from '@material-ui/core/Button';


const About = () => {
   return (
      <div>
      <div class = "title">
         <h1 class="section-title"><b>Desarrollador<span className = "yellow-color"> web</span></b></h1>
      </div>
    <div className ="container">
      <figure class="snip1566"><img src = {Foto_perfil} alt="img" />
      </figure>
        <h2 className ="yellow-color sub-title"><b>Perfil</b></h2>
        <p className = "description">
               Hola! Mi nombre es Milton Fernández, soy Técnico Electrónico
               con experiencia en el <b>desarrollo web.</b> <br></br>
               Aspiro a extender mis competencias en el área de la
               tecnología, más específicamente de la programación web,
               aunque estoy abierto a aprender sobre otras áreas para
               ganar experiencia. <br></br>
               Además quiero desarrollar mi carrera profesional
               aportando mis conocimientos y habilidades para una
               mejora constante en mi ámbito de trabajo.
               </p>
             <Button variant="outlined" href = {Resume} target = "_blank">
               Ver CV
            </Button>
    </div>
    </div>
   )
}
export default About;
