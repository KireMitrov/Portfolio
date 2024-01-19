import React from "react";
import Typewriter from "typewriter-effect";
import "./home.css"

function Home() {

    return (

        <div className="main-container" id="home">
            <div className="main-text">
                <div className="greeting">
                    <Typewriter className="greeting" onInit={(typewriter) => {
                        typewriter
                            .typeString("Hi, my name is")
                            .start();
                    }}></Typewriter>
                </div>
                <h1 className="name">
                    <Typewriter onInit={(typewriter) => {
                        typewriter
                            .pauseFor(1800)
                            .typeString("Kire Mitrov")
                            .start();
                    }}></Typewriter>
                </h1>
                <p className="ocupation">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .pauseFor(3000)
                                .typeString("Front-End Developer")
                                .deleteAll()
                                .typeString("JavaScript Developer")
                                .deleteAll()
                                .typeString("ReactJS Developer")
                                .start();
                        }}
                        options={{
                            loop: true,
                        }}
                    >
                    </Typewriter>
                </p>
            </div>
            <div className="social-media">
                <a href="https://linkedin.com/in/kiremitrov" target="_blank" ><i class="fab fa-linkedin"></i></a>
                <a href="https://github.com/KireMitrov" target="_blank"><i class="fab fa-github"></i></a>
                <a href="mailto:kire_val@yahoo.com"><i class="fas fa-at"></i></a>
                <a href="tel:0040756857379"><i class="fas fa-mobile-alt"></i></a>
            </div>
        </div>
    )
}

export default Home