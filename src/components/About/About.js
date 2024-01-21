import React from "react";
import "./about.css"
import Slider from '../Slider/Slider';
import { Fade } from "react-awesome-reveal";



function About() {

    return (
        <div className="about-container" id="about">
            <Fade direction="up" duration={2000}>
                <div className="about-header">About me</div>
            </Fade>
            <Fade direction="up" duration={2000} delay={500}>
                <div className="about-text">
                    <div>I am Kire, Front-End Developer. I completed an 10-month coding BootCamp and have a deep understanding of the latest development practices and techniques, including proficiency in HTML/CSS, JavaScript, React.js, and Node.js. I have also used the months after the bootcamp to keep sharpening my skills.</div>
                    <div>My college background in Engineering helps me approach Front-End development with a unique problem-solving perspective, allowing me to find innovative solutions to complex problems.</div>
                    <div>With my combination of skills and experience, I am a valuable addition to any team looking for a Front-End Developer who is committed to delivering exceptional results. I am particularly passionate about React.js and enjoy creating dynamic and responsive web applications.</div>
                    <div>If you are interested in learning more about my skills and experience with Front-End development, please feel free to contact me.</div>
                </div>
            </Fade>
            <div className="skills">Skills</div>
            <Slider></Slider>
        </div>
    )
}

export default About