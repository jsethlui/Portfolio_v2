
import { React, useState, useRef } from "react"
import "./Projects.css"
import Image from "react-bootstrap/Image"
import zoomieRoomies from "../../assets/zoomie_roomies.png"
import rungeKutta from "../../assets/runge_kutta.png"
import { UilGithub,
         UilExternalLinkAlt,
         UilAngleLeft,
         UilAngleRight } from "@iconscout/react-unicons"  
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

const Projects: React.FC = () => {
    const iconSize = 27.5;

    const imageRef = useRef(null);
    const [zoomieRoomieOpen, setZoomieRoomieOpen] = useState(false);
    const handleToggle = () => {
        setZoomieRoomieOpen(!zoomieRoomieOpen)
    };
    return (
        <div className="projects_wrapper">                
            <h1>My Projects</h1>
            <div className="skills_wrapper">
                <p>Dev Experience</p>
                <p className="bullet">•</p>
                <p>Research</p>
            </div>            

            <Row className="custom_row">
                <Col className="card">
                    <div className="card_icons_wrapper">
                        <a href="https://github.com/cs130-w22/Group-B1" target="_blank" rel="noreferrer" title="GitHub Repo">
                            <UilGithub size={iconSize} className="card_icon" />
                        </a>

                        <a href="https://use-zoomie-roomies.herokuapp.com/" target="_blank" rel="noreferrer" title="Zoomie Roomies"> 
                            <UilExternalLinkAlt size={iconSize} className="card_icon" />
                        </a>
                    </div>

                    <a href="https://use-zoomie-roomies.herokuapp.com/" target="_blank" rel="noreferrer" title="Zoomie Roomies" className="animated_link">
                        <Image src={zoomieRoomies} className="zoomie_roomie_image" />
                    </a>
                    <div className="card_background_wrapper">
                        <div className="paragraph_cell">
                            <a href="https://use-zoomie-roomies.herokuapp.com/" target="_blank" rel="noreferrer" title="Zoomie Roomies" className="animated_link">
                                <div className="card_title_wrapper">
                                    <UilAngleLeft size={30} />
                                    <h3>Zoomie Roomies</h3>
                                    <UilAngleRight size={30} className="arrow" />
                                </div>
                            </a>
                            <p>
                                As part of our capstone project for COM SCI 130:
                                Software Engineering, we absolve the difficulty
                                of searching for roommates during post-graduation.

                                <br/ ><br />

                                We provide <a href="https://use-zoomie-roomies.herokuapp.com/" target="_blank" rel="noreferrer" title="Zoomie Roomies">Zoomie Roomies</a>, a dedicated platform for
                                postgraduate students who are searching for
                                roommates with similar interests
                            </p>
                        </div>
                    </div>
                </Col>

{/*                <Col className="card">
                    <h3>Runge Kutta</h3>
                    <h4>Student Researcher</h4>
                </Col>*/}
            </Row>
        </div>
    );
}

export default Projects;