
import React from "react"
import "./Projects.css"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

const Projects: React.FC = () => {
    return (
        <div className="projects_wrapper">
            <h1>My Projects</h1>
            <Row>
                <Col>
                    <p>test1</p>
                </Col>

                <Col>
                    <p>test2</p>
                </Col>
            </Row>
        </div>
    );
}

export default Projects;