import React from "react"
import "./footer.css"

function Footer() {

    return (
        <footer className="footer-container">
            <div className="footer-icons">
                <a href="https://linkedin.com/in/kiremitrov" target="_blank" ><i class="fab fa-linkedin"></i></a>
                <a href="https://github.com/KireMitrov" target="_blank"><i class="fab fa-github"></i></a>
                <a href="mailto:kire_val@yahoo.com.com"><i class="fas fa-at"></i></a>
                <a href="tel:0038970398808"><i class="fas fa-mobile-alt"></i></a>
            </div>
            <div>
                <p className="footer-name"> &#169; {new Date().getFullYear()} Developed by Kire Mitrov</p>
            </div>
            <div>
                <p className="footer-moto">Let`s work together</p>
            </div>
        </footer>
    )
}

export default Footer