
import React from "react";
import "./home.css"
import * as Unicons from "@iconscout/react-unicons";

const icon_size = 32.5;

const Home: React.FC = () => {
    return (
        <div className="landing_page_wrapper">
            <div className="greetings_wrapper">
                <div className="spine" />
                <h2>Hello! My name is</h2>
                <h1><a href="https://www.linkedin.com/in/jeremylouie98/" target="_blank" rel="noreferrer">Jeremy Louie</a></h1>
                <p>I'm currently building software needed to detect water contaminants in refillable water stations at <a href="https://atlas-scientific.com/" target="_blank" rel="noreferrer">Atlas Scientific</a></p>
                <div className="icon_wrapper">
                    <a href="https://www.linkedin.com/in/jeremylouie98/" target="_blank" rel="noreferrer" title="LinkedIn">
                        <Unicons.UilLinkedin size={icon_size} className="icon" />                    
                    </a>

                    <a href="https://github.com/jsethlui" target="_blank" rel="noreferrer" title="Github">
                        <Unicons.UilGithub size={icon_size} className="icon" />    
                    </a>

                    <a href="#about" title="About Me">
                        <Unicons.UilInfoCircle size={icon_size} className="icon" />   
                    </a>
                </div>
            </div>
        </div>
    );
};
export default Home;