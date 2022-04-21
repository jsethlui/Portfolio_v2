
import { React, useState, useRef } from "react"
import ReactGA from 'react-ga';
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

    const trackEvent = (category, action, label) => {
        console.log("GA event:", category, ":", action, ":", label);
        ReactGA.event({
            category: category,
            action: action,
            label: label,
        })
    }

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
                        <a href="https://github.com/cs130-w22/Group-B1" target="_blank" rel="noreferrer" title="GitHub Repo" onClick={trackEvent.bind(this, "ZR Repo", "Repo Link", "Repo")}>
                            <UilGithub size={iconSize} className="card_icon" />
                        </a>

                        <a href="https://use-zoomie-roomies.herokuapp.com/" target="_blank" rel="noreferrer" title="Zoomie Roomies" onClick={trackEvent.bind(this, "ZR Site", "Site Link", "Link")}>
                            <UilExternalLinkAlt size={iconSize} className="card_icon" />
                        </a>
                    </div>

                    <a href="https://use-zoomie-roomies.herokuapp.com/" target="_blank" rel="noreferrer" title="Zoomie Roomies" className="animated_link" onClick={trackEvent.bind(this, "ZR Site", "Site Link", "Link")}>
                        <Image src={zoomieRoomies} className="zoomie_roomie_image" />
                    </a>
                    <div className="card_background_wrapper">
                        <div className="paragraph_cell">
                            <a href="https://use-zoomie-roomies.herokuapp.com/" target="_blank" rel="noreferrer" title="Zoomie Roomies" className="animated_link" onClick={trackEvent.bind(this, "ZR Site", "Site Link", "Link")}>
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

                                We provide <a href="https://use-zoomie-roomies.herokuapp.com/" target="_blank" rel="noreferrer" title="Zoomie Roomies" onClick={trackEvent.bind(this, "ZR Site", "Site Link", "Link")}>Zoomie Roomies</a>, a dedicated platform for
                                postgraduate students who are searching for
                                roommates with similar interests
                            </p>
                        </div>
                    </div>
                </Col>

                <Col className="card">
                    <div className="card_icons_wrapper">
                        <a href="https://github.com/jsethlui/What-is-the-best-Runge-Kutta-Method-" target="_blank" rel="noreferrer" title="GitHub Repo" onClick={trackEvent.bind(this, "RK Repo", "Repo Link", "Repo")}>
                            <UilGithub size={iconSize} className="card_icon" />
                        </a>

                        <a href="https://github.com/jsethlui/What-is-the-best-Runge-Kutta-Method-/blob/main/4th_Order_Runge_Kutta_Method_Analysis.ipynb" target="_blank" rel="noreferrer" title="Runge Kutta Analysis" onClick={trackEvent.bind(this, "RK Notebook", "Notebook Link", "Link")}> 
                            <UilExternalLinkAlt size={iconSize} className="card_icon" />
                        </a>
                    </div>

                    <a href="https://github.com/jsethlui/What-is-the-best-Runge-Kutta-Method-/blob/main/4th_Order_Runge_Kutta_Method_Analysis.ipynb" target="_blank" rel="noreferrer" title="Runge Kutta Analysis" className="animated_link">
                        <Image src={rungeKutta} className="runge_kutta_image" onClick={trackEvent.bind(this, "RK Notebook", "Notebook Link", "Link")} />
                    </a>
                    <div className="card_background_wrapper">
                        <div className="paragraph_cell">
                            <a href="https://github.com/jsethlui/What-is-the-best-Runge-Kutta-Method-/blob/main/4th_Order_Runge_Kutta_Method_Analysis.ipynb" target="_blank" rel="noreferrer" title="Runge Kutta Analysis" className="animated_link" onClick={trackEvent.bind(this, "RK Notebook", "Notebook Link", "Link")}>
                                <div className="card_title_wrapper">
                                    <UilAngleLeft size={30} />
                                    <h3>Runge Kutta Analysis</h3>
                                    <UilAngleRight size={30} className="arrow" />
                                </div>
                            </a>
                            <p>
                                The Runge Kutta (RK) Method is an iterative time-step method
                                used to approximate ordinary differential equations (ODE's) around some fixed point. 

                                <br/ ><br />

                                Using <a href="https://github.com/jsethlui/What-is-the-best-Runge-Kutta-Method-/blob/main/4th_Order_Runge_Kutta_Method_Analysis.ipynb" target="_blank" rel="noreferrer" title="Runge Kutta Analysis" onClick={trackEvent.bind(this, "RK Notebook", "Notebook Link", "Link")}>Jupyter Notebook</a>, I use Python and other math libraries to examine whether the standard
                                or the weighted variation RK Methods succeed better in approximating some ODE's 
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Projects;