import React from "react";
import "./navbar.css"

function NavBar() {
    
    return(
        <div className="nav-bar-container">
            <p><a href="#home">Home</a></p>
            <p><a href="#about">About</a></p>
            <p><a href="#projects">Projects</a></p>
            <p><a href="#contact">Contact</a></p>
            
        </div>
    )
}

export default NavBar