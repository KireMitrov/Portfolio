import React from "react";
import "./projects.css"
import { Fade, Slide, Zoom } from 'react-slideshow-image';
import "react-slideshow-image/dist/styles.css"

function Projects() {

    const projects = [
        {
            projectName: "landingpage",
            projectImages: ["landingpage1", "landingpage2", "landingpage3"],
            description: `This is a landing page made for travel agancies where you can put your credentials in a form and win a trip with a lottery, additonal there is comercial trips which the agency is selling`,
            stack: ["Html", "CSS", "JavaScript", "ReactJS"]
        },
        {
            projectName: "weatherapp",
            projectImages: ['weatherapp1'],
            description: `Weather app which initialy is showing you the weather of the current positio. There is search bar where you can find and display the weather up to your wish`,
            stack: ["Html", "CSS", "JavaScript", "ReactJS"]
        },
        {
            projectName: "cart",
            projectImages: ["cart1", "cart2", "cart3"],
            description: `E-commerce shoping cart made with ReactJS class components. The shopping cart have multiple categories, cart overlay view and cart view. All the poducts have multiple attributes which you can change either in cart page either in cart-overlay.`,
            stack: ["Html", "CSS", "JavaScript", "ReactJS"]
        },
        {
            projectName: "progressbar",
            projectImages: ["progressbar1", "progressbar2", "progressbar3"],
            description: `Step progress bar which is showing you on where exactly is your shopping experince, how many steps you have completed and how many left till you complete your order. `,
            stack: ["Html", "CSS", "JavaScript", "ReactJS"]
        },
    ]

    return (
        <div className="projects" id="projects">
            <div className="projects-title"> Some of the things I`ve build</div>
            <div className="projects-container">
                {projects.map((project) => (
                    <div className="project-card-container">
                        <div className="project-name">{project.projectName}</div>
                        <div className="slide-container">
                            <Slide>
                                {project.projectImages.map((fadeImage, index) => (
                                    <div key={index}>
                                        <img style={{ width: '80%' }} src={require(`../../assets/images/projects/${fadeImage}.png`)} />
                                    </div>
                                ))}
                            </Slide>
                        </div>
                        <div className="description">{project.description}</div>
                        <div className="technologies-container">{project.stack.map((technology) => (
                            <div className="technology">{technology}</div>
                        ))}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects