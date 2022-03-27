
import React from "react"
import "./Projects.css"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import zoomieRoomies from "../../assets/zoomie_roomies.png"
import rungeKutta from "../../assets/runge_kutta.png"

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
                
            </div>
        </div>
    );
}

export default Projects;