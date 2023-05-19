import React from "react";
import "./contact.css"


function Contact () {

    return (
        <div className="contact-container" id="contact">
            <div className="contact-inputs">
                <div>GET IN TOUCH</div>
                <div>Contact</div>
                <label>Name</label>
                <input type="text"></input>
                <label>Email</label>
                <input type="text"></input>
                <label>Your message</label>
                <textarea rows="5"></textarea>
                <button>Send message</button>
            </div>
        </div>
    )
}

export default Contact