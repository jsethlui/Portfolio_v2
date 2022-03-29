
import React from "react"
import "./Intro.css"
import { UilLinkedin, 
         UilGithub,
         UilInfoCircle } from "@iconscout/react-unicons"
import Typewriter from 'typewriter-effect'

const Intro: React.FC = () => {
    const iconSize = 35;
    return (
        <div>
            {/* initial intro */}
            <div className="landing_page_wrapper">
                <div className="greetings_wrapper">
                    <div className="spine" />
                    <h2>Hello! My name is</h2>
                    <h1>
                        <a href="https://www.linkedin.com/in/jeremylouie98/" target="_blank" rel="noreferrer" className="animated_link">
                            Jeremy Louie
                        </a>
                    </h1>
                    <div className="i_am_wrapper">
                        <p>I am a&nbsp;</p>
                        <span className="adjective">
                            <Typewriter
                                options={{
                                    strings: ["programmer", "software developer", "coffee enthusiast"],
                                    autoStart: true,
                                    delay: 100,
                                    loop: true,
                                }}
                            />
                        </span>
                    </div>
                    <p className="more_about">
                        I'm currently writing software needed to store data concerning water contaminants for <a href="https://atlas-scientific.com/?gclid=CjwKCAjwoduRBhA4EiwACL5RPxZBJaxTNNsfTJ2gFKxVIYw2wRsUgp9IjIgWa1LeARFWNCAu9FWRjRoCTtcQAvD_BwE" target="_blank" rel="noreferrer" className="animated_link" style={{fontWeight: "500"}}> Atlas Scientific</a>
                    </p>

                    <div className="icon_wrapper">
                        {/*LinkedIn*/}
                        <a href="https://www.linkedin.com/in/jeremylouie98/" target="_blank" rel="noreferrer" title="LinkedIn" className="animated_link">
                            <UilLinkedin size={iconSize} className="icon" />                    
                        </a>

                        {/*GitHub*/}
                        <a href="https://github.com/jsethlui" target="_blank" rel="noreferrer" title="Github" className="animated_link">
                            <UilGithub size={iconSize} className="icon" />    
                        </a>

                        {/*About Me*/}
                        <a href="#about" title="About Me" className="animated_link">
                            <UilInfoCircle size={iconSize} className="icon" />   
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;