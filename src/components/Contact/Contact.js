import React from "react";
import "./contact.css"


function Contact () {

    return (
        <div className="contact-container" id="contact">
            <div className="contact-inputs">
                <div>GET IN TOUCH</div>
                <div>Contact</div>
                <label>Your Name</label>
                <input type="text"></input>
                <label>Your email</label>
                <input type="text"></input>
                <label>Your message</label>
                <input type="text-area"></input>
                <button>Send message</button>
            </div>
        </div>
    )
}

export default Contact