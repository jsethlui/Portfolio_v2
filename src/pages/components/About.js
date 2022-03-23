
import React from "react";
import "./About.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Avatar from "../../assets/avatar.jpg"

const About: React.FC = () => {
    return (
        <div className="surround_wrapper">
            <div className="stats_wrapper">
                {/* skills */}
                <Row className="cell_wrapper" style={{right: "0"}}>
                    <Col className="cell_right">
                        <h3>Research<br />Positions</h3>
                        <p>2</p>
                    </Col>

                    <Col className="cell_right">
                       <h3>Projects<br />Completed</h3>
                        <p>3</p>
                    </Col>

                    <Col className="cell_right">
                        <h3>Honors<br />Completed</h3>
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
                        </ul>
                    </Col> 

                    <Col className="cell_left">
                        <h3>Location</h3>
                        <p>San Francisco</p>
                    </Col> 

                    <Col className="cell_left">
                        <h3>Interests</h3>
                        <ul>
                            <li>Software Engineering</li>
                            <li>Cloud Computing</li>
                        </ul>
                    </Col> 
                </Row>
            </div>

            <div className="content_wrapper">
                <h1>About Me</h1>
                <p>
                    My name is Jeremy, and I enjoy developing <b className="bold">useful products</b> with
                    a digital eye! Currently, I'm currently a Software Developer for <b className="bold">Atlas Scientific</b>. 
                    More specifically, I write <b className="bold">Python</b> programs that have ported over our data (collected from a Raspberry Pi)
                    onto <b className="bold">Google Cloud's Firestone</b> database, and automating our data
                    collection procedures using common <b className="bold">design patterns</b>!

                    <br /><br />

                    While programming has given me many sleepless nights, it also give rise to
                    my <b className="bold">coffee</b> addiction! In fact, I love exploring different cities and their trying unique coffee flavor
                    profiles. 

                    <br /><br />

                    Above all, I’m always willing to keep up with the rapidly changing pace of technology by <b className="bold">learning</b> something new everyday!
                </p>
            </div>
        </div>
    );
};

export default About;
