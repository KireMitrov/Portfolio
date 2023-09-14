import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser"
import "./contact.css"


function Contact() {

    const form = useRef();
    const [confirmSend, setConfirmSend] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
        
        setConfirmSend(true);

        emailjs.sendForm('service_81m8pmq', 'template_xlaqqmt', form.current, 'i3av93C8u0QQb9--k')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        <div className="contact-container" id="contact">
            <div className="contact-inputs">
                <div>GET IN TOUCH</div>
                <div>Contact</div>
                    <form  className="form" ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="user_name" required/>
                        <label>Email</label>
                        <input type="email" name="user_email" required />
                        <label>Message</label>
                        <textarea name="message"  rows="5"/>
                        <input type="submit"  className="sendBtn" value="Send message" required />
                    </form>
            </div>
                <div className={`confirm-send ${confirmSend ? "visible" : ""}`}> <span className="checked-sign">&#10003;</span> Thank you for your contact. <span className="close-btn" onClick={() => setConfirmSend(false)}>x</span></div>
        </div>
    )
}

export default Contact