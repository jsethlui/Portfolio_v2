
import React from "react";
import "./home.css";
import "./styles/scrollbar.css"
import { UilLinkedin, 
         UilGithub,
         UilInfoCircle } from "@iconscout/react-unicons";
import Menu from "./menu";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Avatar from "../assets/avatar.jpg"

import Intro from "../components/Intro.js"

const Home: React.FC = () => {
    const iconSize = 32.5;

    return (
        <div>
            <Intro />

            {/* about me */}
            <div className="content_wrapper" id="about">
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
            </div>
        </div>
    );
};

export default Home;