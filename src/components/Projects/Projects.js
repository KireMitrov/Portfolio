import React from "react";
import "./projects.css"
import { Slide, Zoom } from 'react-slideshow-image';
import "react-slideshow-image/dist/styles.css"
import { Fade } from 'react-awesome-reveal'
import Tilt from 'react-parallax-tilt'

function Projects() {

    const projects = [
        {
            projectName: "Real Estate",
            projectImages: ["realestate1", "realestate2", "realestate3", "realestate4", "realestate5"],
            description: `Project made for real estate agency, where are listed unique properties in different layouts and categories.`,
            stack: ["JavaScript", "ReactJS", "Slick"],
            linkGithub: "https://github.com/KireMitrov/Shopping-cart-classes",
            linkLive: "https://realestate-kire.netlify.app/"
        },
        {
            projectName: "E-Commerce",
            projectImages: ["cart1", "cart2", "cart3"],
            description: `E-commerce shoping cart made with ReactJS class components. The shopping cart have multiple categories, cart overlay view and cart view. All the poducts have multiple attributes which you can change either in cart page either in cart-overlay.`,
            stack: ["JavaScript", "ReactJS", "GraphQL"],
            linkGithub: "https://github.com/KireMitrov/Shopping-cart-classes",
            linkLive: "https://cart-kire.netlify.app/"
        },
        {
            projectName: "crypto coins graphs",
            projectImages: ["cryptocoins1", "cryptocoins2", "cryptocoins3"],
            description: `Crypto price tracking app using the React and the Coingecko Api.`,
            stack: ["ReactJs", "Coingecko Api", "Axios", "Recharts"],
            linkGithub: "https://github.com/KireMitrov/crypto-coins",
            linkLive: "https://crypto-info-kire.netlify.app/"
        },
        // {
        //     projectName: "to Do List",
        //     projectImages: ["todolist"],
        //     description: `Todo App made with ReactJS. You can add, edit and delete tasks. The tasks are saved in local storage and available after closing the window.`,
        //     stack: ["Html", "CSS", "JavaScript", "ReactJS"],
        //     linkGithub: "https://github.com/KireMitrov/ReactJs-To-Do-App",
        //     linkLive: "https://todoapp-kire.netlify.app/"
        // },
        // {
        //     projectName: "weatherapp",
        //     projectImages: ['weatherapp1'],
        //     description: `Weather app which initialy is showing you the weather of the current positio. There is search bar where you can find and display the weather up to your wish`,
        //     stack: ["Html", "CSS", "JavaScript", "ReactJS"],
        //     linkGithub: "https://github.com/KireMitrov/React-Weather-App",
        //     linkLive: "https://kire-weatherapp.netlify.app/"
        // },
        // {
        //     projectName: "progressbar",
        //     projectImages: ["progressbar1", "progressbar2", "progressbar3"],
        //     description: `Step progress bar which is showing you on where exactly is your shopping experince, how many steps you have completed and how many left till you complete your order. `,
        //     stack: ["Html", "CSS", "JavaScript", "ReactJS"],
        //     linkGithub: "https://github.com/KireMitrov/React-ProgressBar-component",
        //     linkLive: "https://progressbar-kire.netlify.app/"
        // },
        {
            projectName: "Win & Travel",
            projectImages: ["landingpage1", "landingpage2", "landingpage3"],
            description: `This is a landing page made for travel agancies where you can put your credentials in a form and win a trip with a lottery, additonal there is comercial trips which the agency is selling`,
            stack: ["Html", "CSS", "JavaScript", "ReactJS"],
            linkGithub: "https://github.com/KireMitrov/React-Landing-Page",
            linkLive: "https://travel-kire.netlify.app/"
        },
        {
            projectName: "Quiz App",
            projectImages: ["quiz1", "quiz2", "quiz3", "quiz4",],
            description: `Quiz App made with ReactJS and NodeJs. This app has server done with NodeJs where the data is stored on MongoDb database. It have a Admin page too where you can easily add new questions`,
            stack: ["ReactJS", "NodeJS", "MongoDb"],
            linkGithub: "https://github.com/KireMitrov",
            linkLive: "https://kire-mitrov.netlify.app/"
        },
    ]

    return (
        <div className="projects" id="projects">
            <div className="projects-title"> Some of the things I`ve build</div>
            <div className="projects-container">
                {projects.map((project) => (
                            <Tilt>
                    <div className="project-card-container">
                            <div className="slide-container">
                                <Slide>
                                    {project.projectImages.map((fadeImage, index) => (
                                        <Fade direction="up" duration={1500}>
                                            <div key={index}>
                                                <img src={require(`../../assets/images/projects/${fadeImage}.png`)} />
                                            </div>
                                        </Fade>
                                    ))}
                                </Slide>
                            </div>
                            <Fade  direction="up" duration={1500} className="project-name">{project.projectName}</Fade>
                            <Fade  direction="left" duration={1500} className="description">{project.description}</Fade>
                            <div className="technologies-container">{project.stack.map((technology) => (
                                <Fade direction="up" duration={1500}><div  className="technology">#{technology}</div></Fade>
                            ))}</div>
                        <div className="project-links">
                            <a href={project.linkGithub} title="Source code" target="_blank"><i class="fab fa-github"></i></a>
                            <a href={project.linkLive} title="Click to visit the app" target="_blank"><i class="fas fa-globe"></i></a>
                        </div>
                        </div>
                    </Tilt>
                ))}
            </div>
        </div>
    )
}

export default Projects