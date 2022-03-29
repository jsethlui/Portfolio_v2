
import React from "react"
import "./Intro.css"
import { UilLinkedin, 
         UilGithub,
         UilInfoCircle } from "@iconscout/react-unicons"
import Typewriter from 'typewriter-effect'

const Intro: React.FC = () => {
    const iconSize = 32.5;
    return (
        <div>
            {/* initial intro */}
            <div className="landing_page_wrapper">
                <div className="greetings_wrapper">
                    <div className="spine" />
                    <h2>Hello! My name is</h2>
                    <h1><a href="https://www.linkedin.com/in/jeremylouie98/" target="_blank" rel="noreferrer">Jeremy Louie</a></h1>
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

                    <div className="icon_wrapper">
                        {/*LinkedIn*/}
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
        </div>
    );
};

export default Intro;