
import React from "react"
import "./Footer.css"
import { UilLinkedin, 
         UilGithub,
         UilEnvelope } from "@iconscout/react-unicons"

const Footer: React.FC = () => {
    return (
        <div className="footer_wrapper">
            <div className="footer_icon_wrapper">
                <a href="https://www.linkedin.com/in/jeremylouie98/" target="_blank" rel="noreferrer" className="animated_link">
                    <UilLinkedin className="footer_icon" />
                </a>

                <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=%6A%73%65%74%68%6C%75%69%40%67%2E%75%63%6C%61%2E%65%64%75" target="_blank" rel="noreferrer" className="animated_link">
                    <UilEnvelope className="footer_icon" />
                </a>

                <a href="https://github.com/jsethlui" target="_blank" rel="noreferrer" className="animated_link">
                    <UilGithub className="footer_icon" />
                </a>
            </div>
            <p>Website Developed by Jeremy Louie</p>
            <a href="https://github.com/jsethlui/Portfolio_v2" target="_blank" rel="noreferrer" className="code_link">
                [Code]
            </a>
        </div>
    );
};

export default Footer;
