
import React from "react";
import "./home.css";
import "./styles/scrollbar.css"
import { UilLinkedin, UilGithub, UilInfoCircle, UilEnvelope } from "@iconscout/react-unicons";
import Menu from "./menu";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

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
                        {/*LinkedIn nkedin*/}
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
                            <h3>Number of Internships</h3>
                            <p>2</p>
                        </Col>

                        <Col className="cell_right">
                           <h3>Projects Completed</h3>
                            <p>3</p>
                        </Col>

                        <Col className="cell_right">
                            <h3>Languages Learned</h3>
                            <p>6</p>
                        </Col>
                    </Row>

                    {/*avatar*/}
                    <div className="avatar_wrapper">
                    </div>

                    <Row className="cell_wrapper" style={{left: "0"}}>
                        <Col className="cell_left">
                            <h3>Contact Info</h3>
                            <ul>
                                <li>San Francisco, CA</li>
                                <li>
                                    <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=jsethlui@.ucla.edu" target="_blank" rel="noreferrer">
                                        <UilEnvelope />
                                    </a>
                                </li>
                            </ul>
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