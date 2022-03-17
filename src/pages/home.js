
import React from "react";
import "./home.css";
import "./styles/scrollbar.css"
import { UilLinkedin, UilGithub, UilInfoCircle, UilEnvelope } from "@iconscout/react-unicons";
import Menu from "./menu";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Avatar from "../assets/avatar.jpg"

const Home: React.FC = () => {
    const iconSize = 32.5;

    return (
        <div>
            {/* initial intro */}
            <div className="landing_page_wrapper">
                <Menu className="menu"></Menu>
                <div className="greetings_wrapper">
                    <div className="spine" />
                    <h2>Hello! My name is</h2>
                    <h1><a href="https://www.linkedin.com/in/jeremylouie98/" target="_blank" rel="noreferrer">Jeremy Louie</a></h1>
                    <p>I'm currently building software needed to detect water contaminants in refillable water stations at <a href="https://atlas-scientific.com/" target="_blank" rel="noreferrer" className="atlas_bold">Atlas Scientific</a></p>
                    <div className="icon_wrapper">
                        {/*LinkedIn*/}
                        <a href="https://www.linkedin.com/in/jeremylouie98/" target="_blank" rel="noreferrer" title="LinkedIn">
                            <UilLinkedin size={iconSize} className="icon" />                    
                        </a>

                        {/*GitHub*/}
                        <a href="https://github.com/jsethlui" target="_blank" rel="noreferrer" title="Github">
                            <UilGithub size={iconSize} className="icon" />    
                        </a>

                        {/*About Me*/}
                        <a href="#about" title="About Me">
                            <UilInfoCircle size={iconSize} className="icon" />   
                        </a>
                    </div>
                </div>
            </div>

            {/* about me */}
            <div className="content_wrapper">
                <div className="surrounding_wrapper">
                    {/* skills */}
                    <Row className="cell_wrapper" style={{right: "0"}}>
                        <Col className="cell_right">
                            <h3>Research Positions</h3>
                            <p>2</p>
                        </Col>

                        <Col className="cell_right">
                           <h3>Projects Completed</h3>
                            <p>3</p>
                        </Col>

                        <Col className="cell_right">
                            <h3>Honors Completed</h3>
                            <p>5</p>
                        </Col>
                    </Row>

                    <Row className="avatar_wrapper">
                        <img src={Avatar} alt="avatar" />
                        <p>
                            Hi, my name is Jeremy and I enjoy building useable
                            products!
                        </p>
                    </Row>

                    <Row className="cell_wrapper" style={{left: "0"}}>
                        <Col className="cell_left">
                            <h3>Education</h3>
                            <ul>
                                <li>University of California, Los Angeles</li>
                                <li>City College of San Francisco</li>
                            </ul>
                        </Col> 

                        <Col className="cell_left">
                            <h3>Contact Info</h3>
                            <p>San Francisco</p>
                        </Col> 

                        <Col className="cell_left">
                            <h3>Interests</h3>
                            <ul>
                                <li>Software Engineering</li>
                                <li>Cloud Computing</li>
                                <li>UI / UX Design</li>
                            </ul>
                        </Col> 

                    </Row>
                </div>
                {/*<p>about me</p>*/}
            </div>
        </div>
    );
};

export default Home;