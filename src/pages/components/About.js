
import React from "react"
import "./About.css"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Avatar from "../../assets/avatar.jpg"

const About: React.FC = () => {
    const iconSize = 50;
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
                    <a href="https://www.linkedin.com/in/jeremylouie98/" target="_blank" rel="noreferrer" className="animated_link">
                        <img src={Avatar} alt="avatar" title="LinkedIn" />
                    </a>
                </Row>

                <Row className="cell_wrapper" style={{left: "0"}}>
                    <Col className="cell_left">
                        <h3>Education</h3>
                        <ul>
                            <li>University of California – Los Angeles</li>
                            <li><a href="https://catalog.registrar.ucla.edu/major/2021/MathematicsofComputationBS" target="_blank" rel="noreferrer" className="animated_link">Mathematics of Computation</a></li>
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
                <div className="skills_wrapper">
                    <p>Education</p>
                    <p className="bullet">•</p>
                    <p>Interests</p>
                    <p className="bullet">•</p>
                    <p>Hobbies</p>
                </div>
                <p>
                    My name is Jeremy, and I enjoy developing useful products with
                    a digital eye! Having graduated from <a href="https://www.ucla.edu/" target="_blank" rel="noreferrer">University of California, Los Angeles</a> with a degree in <a href="https://catalog.registrar.ucla.edu/major/2021/MathematicsofComputationBS" target="_blank" rel="noreferrer">Mathematics of Computation</a>, I'm currently a Software Developer for <a href="https://atlas-scientific.com/?gclid=CjwKCAjwoduRBhA4EiwACL5RPxZBJaxTNNsfTJ2gFKxVIYw2wRsUgp9IjIgWa1LeARFWNCAu9FWRjRoCTtcQAvD_BwE" target="_blank" rel="noreferrer">Atlas Scientific</a>. 
                    More specifically, I write Python programs that have ported over our data (collected from a Raspberry Pi)
                    onto <a href="https://firebase.google.com/docs/firestore" target="_blank" rel="noreferrer">Google Cloud's Firestone</a> database, and automating our data
                    collection procedures using common design patterns!

                    <br /><br />

                    While programming has given me many sleepless nights, it also give rise to
                    my coffee addiction. In fact, I love exploring different cities and their trying unique coffee flavor
                    profiles. 

                    <br /><br />

                    Above all, I’m always willing to keep up with the rapidly changing pace of technology by learning something new everyday!
                </p>

                
            </div>
        </div>
    );
};

export default About;
