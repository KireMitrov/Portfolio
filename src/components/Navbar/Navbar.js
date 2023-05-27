import React, { useRef } from "react";
import "./navbar.css";


function NavBar() {
    const navRef = useRef();

    const toggleNavbar = () => {
        navRef.current.classList.toggle("responsive-nav");
    }

    return (
        <div className="nav-bar-container">
            <nav ref={navRef}>
                <a href="#home" onClick={toggleNavbar}>Home</a>
                <a href="#about" onClick={toggleNavbar}>About</a>
                <a href="#projects" onClick={toggleNavbar}>Projects</a>
                <a href="#contact" onClick={toggleNavbar}>Contact</a>
                <button onClick={toggleNavbar} className=" nav-btn nav-close-btn"><i className="fa fa-times"></i></button>
            </nav>
            <button onClick={toggleNavbar} className="nav-btn"><i className="fa fa-bars"></i></button>
        </div>
    )
}

export default NavBar

