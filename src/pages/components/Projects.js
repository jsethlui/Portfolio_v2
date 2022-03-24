
import React from "react";
import "./Projects.css"

const Projects: React.FC = () => {
    return (
        <div className="projects_wrapper">
            <h1>My Projects</h1>
            <div className="single_project_wrapper">

                {/*title section*/}
                <div className="title_wrapper">
                    <h3 className="number">[a]</h3>
                    <h3>&nbsp;&nbsp;</h3>
                    <h3 className="title">Zoomie Roomies</h3>
                </div>

                {/*about project section*/}
                <p>
                    Brief: <a href="https://use-zoomie-roomies.herokuapp.com" target="_blank" rel="noreferrer">Zoomie Roomies</a> connects post-graduate students who are searching for roommates with similar interests
                </p>
            </div>
        </div>
    );
}

export default Projects;