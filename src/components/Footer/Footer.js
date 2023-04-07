import React from "react"
import "./footer.css"

function Footer() {

    return (
        <footer className="footer-container">
            <div>
                <p className="footer-name">Powered by Kire Mitrov</p>
            </div>
            <div>
                <p className="footer-moto">Let`s work together</p>
            </div>
            <div className="footer-icons">
                <a href="https://facebook.com/freecodecamp" target="_blank" ><i class="fab fa-facebook-square"></i> Facebook</a>
                <a href="https://github.com/KireMitrov" target="_blank"><i class="fab fa-github"></i> GitHub</a>
                <a href="mailto:kire_val@yahoo.com.com"><i class="fas fa-at"></i> Send a mail</a>
                <a href="tel:555-555-5555"><i class="fas fa-mobile-alt"></i> Call me</a>
            </div>
        </footer>
    )
}

export default Footer