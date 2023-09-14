import React from "react";
import "./slider.css";

function Slider() {

    const skills = ["html5", "css3", "javascript", "react", "nodejs", "mongodb", "git", "github"]


    return (
        <div className="slider">
            <div className="slide-track">
                {skills.map((skill) => (
                    <img src={require(`../../assets/images/skills/${skill}.png`)} />
                ))}
            </div>
            <div className="slide-track">
                {skills.map((skill) => (
                    <img src={require(`../../assets/images/skills/${skill}.png`)} />
                ))}
            </div>

        </div>
    )
}

export default Slider