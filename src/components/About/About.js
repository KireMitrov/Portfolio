import React from "react";
import "./about.css"

function About(){

    return(
        <div className="about-container" id="about">
            <div className="about-header">About me</div>
            <div className="about-text">
                <div>I am Kire, a Junior Front-End Developer with a solid foundation in Front-End development. I completed an 10-month coding BootCamp and have a deep understanding of the latest development practices and techniques, including proficiency in HTML/CSS, JavaScript, React.js, and Node.js. I have also used the months after the bootcamp to keep sharpening my skills.</div>
                <div>My college background in Engineering helps me approach Front-End development with a unique problem-solving perspective, allowing me to find innovative solutions to complex problems.</div>
                <div>With my combination of skills and experience, I am a valuable addition to any team looking for a Junior Front-End Developer who is committed to delivering exceptional results. I am particularly passionate about React.js and enjoy creating dynamic and responsive web applications.</div>
                <div>If you are interested in learning more about my skills and experience with Front-End development, please feel free to contact me.</div>
            </div>
            <div className="skills">Skills</div>
            <div className="skills-container"></div>
        </div>
    )
}

export default About