
import { React, useState, useRef } from "react"
import "./Projects.css"
import Image from "react-bootstrap/Image"
import zoomieRoomies from "../../assets/zoomie_roomies.png"
import rungeKutta from "../../assets/runge_kutta.png"
import { UilGithub,
         UilExternalLinkAlt } from "@iconscout/react-unicons"
import { Tab,
         Tabs,
         TabList,
         TabPanel } from "react-tabs"

const Projects: React.FC = () => {
    const iconSize = 25;

    const imageRef = useRef(null);
    const [zoomieRoomieOpen, setZoomieRoomieOpen] = useState(false);
    const handleToggle = () => {
        setZoomieRoomieOpen(!zoomieRoomieOpen)
    };
    return (
        <div className="projects_wrapper" onClick={handleToggle}>
            <div className="image_card_wrapper" ref={imageRef} className={`image_card_wrapper ${zoomieRoomieOpen ? 'active' : 'inactive'}`}>
                
            </div>
            <Tabs style={{display: "flex"}}>
                <TabList>
                    <Tab toggled={setZoomieRoomieOpen}>Zoomie Roomies</Tab>
                    <Tab toggled={setZoomieRoomieOpen}>Runge Kutta Analysis</Tab>
                </TabList>

                <TabPanel>
                    <div>
                        <p>zoomie roomies</p>
                    </div>
                </TabPanel>

                <TabPanel>
                    <div>
                        <p>runge kutta</p>
                    </div>
                </TabPanel>
            </Tabs>
{/*            <h1>My Projects</h1>
            <div className="skills_wrapper">
                <p>Dev Experience</p>
                <p className="bullet">•</p>
                <p>Research</p>
            </div>

            <div className="cards_wrapper">
                <div className="image_wrapper">
                    <a href="https://use-zoomie-roomies.herokuapp.com/" target="_blank" rel="noreferrer" title="Zoomie Roomies" className="animated_link"> 
                        <Image src={zoomieRoomies} responsive />
                    </a>
                    <div>
                        <a href="https://github.com/cs130-w22/Group-B1" target="_blank" rel="noreferrer" className="link" title="GitHub Repo">
                            <UilGithub size={iconSize} />
                        </a>

                        <a href="https://use-zoomie-roomies.herokuapp.com/" target="_blank" rel="noreferrer" className="link" title="Zoomie Roomies"> 
                            <UilExternalLinkAlt size={iconSize} />
                        </a>
                    </div>
                </div>
                <div className="about_card_wrapper">
                    <h3><a href="https://github.com/cs130-w22/Group-B1" target="_blank" rel="noreferrer" title="Zoomie Roomies">Zoomie Roomies</a></h3>

                    <p>
                        <b className="bold">Role:</b> Front-end Developer & Design
                    </p>

                    <p>
                        <b className="bold">Abstract:</b> we developed a web app
                        platform aimed at making roommate searching easier for
                        post-graduate students
                    </p>

                    <p>                    
                        <b className="bold">Brief:</b> during post-graduation, the most difficult task
                        when searching for optimal roommates is being matched with one (or more) of 
                        similar interests. Currently, students must advertise themselves on platforms
                        such as Facebook or by "word of ear." Many of these platforms are not directly
                        targetted towards searching for roommates.

                        <br /><br />

                        As part of our capstone project for COM SCI 130: Software Engineering, we (among a
                        total of five students) aim at making roommate searching easier for post-graduate 
                        students with <a href="https://use-zoomie-roomies.herokuapp.com/" target="_blank" rel="noreferrer" title="Zoomie Roomies" style={{color: "var(--cinnabar)"}}> Zoomie Roomies.</a> We use Agile methodologies for quick product delivery,
                        React for our backend and frontend, MongoDB to store our data, and Typescript to 
                        write our backend API's.
                    </p>
                    <ul className="project_tools_wrapper">
                        <li>Agile</li>
                        <li>React</li>
                        <li>Git</li>
                        <li>CSS and Javascript</li>
                    </ul>
                </div>
            </div>

            <div className="cards_wrapper">
                <div className="image_wrapper">
                    <a href="https://github.com/jsethlui/What-is-the-best-Runge-Kutta-Method-/blob/main/4th_Order_Runge_Kutta_Method_Analysis.ipynb" target="_blank" rel="noreferrer" title="Jupyter Notebook" className="animated_link">
                        <Image src={rungeKutta} responsive />
                    </a>
                    <div>
                        <a href="https://github.com/jsethlui/What-is-the-best-Runge-Kutta-Method-" target="_blank" rel="noreferrer" className="link" title="GitHub Repo">
                            <UilGithub size={iconSize} />
                        </a>

                        <a href="https://github.com/jsethlui/What-is-the-best-Runge-Kutta-Method-/blob/main/4th_Order_Runge_Kutta_Method_Analysis.ipynb" target="_blank" rel="noreferrer" className="link" title="Jupyter Notebook"> 
                            <UilExternalLinkAlt size={iconSize} />
                        </a>
                    </div>
                </div>
                <div className="about_card_wrapper">
                    <h3><a href="https://github.com/jsethlui/What-is-the-best-Runge-Kutta-Method-/blob/main/4th_Order_Runge_Kutta_Method_Analysis.ipynb" target="_blank" rel="noreferrer" title="Jupyter Notebook">4th Order Runge Kutta Method Analysis</a></h3>

                    <p>
                        <b className="bold">Role:</b> Student Researcher
                    </p>

                    <p>
                        <b className="bold">Abstract:</b> I apply the Runge Kutta method and its variation to approximate
                        two different ordinary differential equations around some given timestep
                    </p>

                    <p>                    
                        <b className="bold">Brief:</b> The Runge Kutta (RK) Method is an iterative time-step method
                        used to approximate ordinary differential equations (ODE's) around some fixed point. There 
                        also exists different weighted variations of the RK Method, which may be more suitable in some 
                        cases in order to obtain a greater approximation than that of the standard RK Method. Within 
                        my research, I explore two things: (1) the standard and 3/8 weighted RK Methods, and (2) two 
                        different ODE's (each with their own respective fixed point).

                        <br /><br />

                        The goal is to approximate both of these ODE's with both the standard and 3/8 weighted RK Methods. 
                        The idea is to identify which of the following is true:

                        <ol style={{ listStyleType: "lower-roman" }}>
                            <li>the standard RK Method obtains a better approximation for both ODE's</li>
                            <li>the 3/8 weighted RK Method obtains a better approximation for both ODE's</li>
                            <li>the standard RK Method obtains a better approximation for one ODE than that of the 3/8 weighted RK Method</li>
                            <li>the 3/8 weighted RK Method obtains a better approximation for one ODE than that of the standard RK Method</li>
                        </ol>

                    </p>
                    <ul className="project_tools_wrapper">
                        <li>Python3</li>
                        <li>MATLAB</li>
                        <li>SciPy</li>
                        <li>Jupyter Notebook</li>
                    </ul>
                </div>
            </div>*/}
        </div>
    );
}

export default Projects;