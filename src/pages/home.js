
import React from "react";
import "./home.css";
import { UilLinkedin, UilGithub, UilInfoCircle } from "@iconscout/react-unicons";
import Menu from "./menu";

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

                    {/*add momentum inspired thingy*/}
                    {/*i.e. right now i'm learning x, y, z,...*/}

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

                    {/*skills*/}
                    <div className="skills_wrapper">
                        <div className="cell">
                            <h3>Languages{"\n"}Learned</h3>
                            <p>6</p>
                        </div>
                    </div>

                    {/*avatar*/}
                    <div className="avatar_wrapper">
                    </div>

                    {/*projects*/}
                    <div className="projects_wrapper">
                    </div>
                </div>
                <div className="icon_wrapper">
                </div>
                <p>about me</p>
            </div>
        </div>
    );
};

export default Home;