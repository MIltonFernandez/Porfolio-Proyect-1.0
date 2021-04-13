import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Particles from "react-particles-js";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Album from "./components/album";
import About from "./components/About";
import Contacto from "./components/Contact";


function App() {
  return (
    <Router>
    <>
    <Switch>

    <Route path = "/Proyectos">
          <Navbar />
          <Album/>
    </Route>

    <Route path = "/About">
          <Navbar />
          <About/>
    </Route>

    <Route path = "/Contacto">
          <Navbar />
          <Contacto/>
    </Route>
    

    <Route path = "/">
          <Particles
            className="particles-canvas"
            params={{
            particles: {
              number: {
                value: 30,
                density: {
                  enable: true, 
                  value_area: 900,
                }}, 
              shape: {
                type: "circle", 
                stroke: {
                  width: 6, 
                  color: "#f9ab00"
                }
              }
              }
            }} />
          <Navbar />
          <Header/>
          
          
    </Route>

    
    

    </Switch>
    </>
    </Router>
  );

  
}



export default App;