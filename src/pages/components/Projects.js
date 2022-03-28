
import React from "react"
import "./Projects.css"
import Image from "react-bootstrap/Image"
import zoomieRoomies from "../../assets/zoomie_roomies.png"
import rungeKutta from "../../assets/runge_kutta.png"
import { UilGithub,
         UilExternalLinkAlt } from "@iconscout/react-unicons"

const Projects: React.FC = () => {
    const iconSize = 25;
    return (
        <div className="projects_wrapper">
            <h1>My Projects</h1>
            <div className="skills_wrapper">
                <p>Dev Experience</p>
                <p className="bullet">•</p>
                <p>Research</p>
            </div>
            <div className="cards_wrapper">
                <div className="image_wrapper">
                    <Image src={zoomieRoomies} responsive />
                    <div>
                        {/*github*/}
                        <a href="https://github.com/cs130-w22/Group-B1" target="_blank" rel="noreferrer" className="link" title="GitHub Repo">
                            <UilGithub size={iconSize} />
                        </a>

                        {/*zoomie roomie link*/}
                        <a href="https://use-zoomie-roomies.herokuapp.com/" target="_blank" rel="noreferrer" className="link" title="Zoomie Roomies"> 
                            <UilExternalLinkAlt size={iconSize} />
                        </a>
                    </div>
                </div>
                <div className="about_card_wrapper">
                    <h3><a href="https://github.com/cs130-w22/Group-B1" target="_blank" rel="noreferrer" title="Zoomie Roomies">Zoomie Roomies</a></h3>

                    {/*roles*/}
                    <p>
                        <b className="bold">Role:</b> Front-end Developer & Design
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
                        such as Facebook or by "word of ear." Many of these platforms are not directly
                        targetted towards searching for roommates.

                        <br /><br />

                        As part of our capstone project for COM SCI 130: Software Engineering, we (among a
                        total of five students) aim at making roommate searching easier for post-graduate 
                        students with Zoomie Roomies. We use Agile methodologies for quick product delivery,
                        React for our backend and frontend, MongoDB to store our data, and Typescript to 
                        write our backend API's.
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