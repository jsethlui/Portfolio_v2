
import React from "react"
import "./Projects.css"
import Image from "react-bootstrap/Image"
import zoomieRoomies from "../../assets/zoomie_roomies.png"
import rungeKutta from "../../assets/runge_kutta.png"
import { UilGithub,
         UilExternalLinkAlt } from "@iconscout/react-unicons"

const Projects: React.FC = () => {
    return (
        <div className="projects_wrapper">
            <h1>My Projects</h1>
            <div className="skills_wrapper">
                <p>Dev Experience</p>
                <p className="bullet">•</p>
                <p>Research</p>
            </div>
            <div className="cards_wrapper">
                <Image src={zoomieRoomies} responsive />
                <div className="about_card_wrapper">
                    <h3><a href="https://github.com/cs130-w22/Group-B1" target="_blank" rel="noreferrer">Zoomie Roomies</a></h3>

                    {/*roles*/}
                    <p>
                        <b className="bold">Roles:</b> Front-end Developer & Design
                    </p>

                    {/*abstract*/}
                    <p>
                        <b className="bold">Abstract:</b> we developed a web app
                        platform aimed at making roommate searching easier for
                        post-graduate students
                    </p>

                    {/*brief*/}
                    <p>                    
                        <b className="bold">Brief:</b> during post-graduation, the most difficult task
                        when searching for optimal roommates is being matched with one (or more) of 
                        similar interests. Currently, students must advertise themselves on platforms
                        such as Facebook or by "word of ear." Very few platforms exist that are
                        targetted at matching post-graduate roommates together.
                        <br /><br />

                        As part of our capstone project for COM SCI 130: Software Engineering, we aim
                        at making roommate searching easier for post-graduate students with Zoomie
                        Roomies.
                    </p>
                    <ul className="project_tools_wrapper">
                        <li>Agile</li>
                        <li>React</li>
                        <li>Git</li>
                        <li>CSS and Javascript</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Projects;