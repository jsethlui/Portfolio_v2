
import { React, useState, useRef } from "react";
import "./Menu.css";
import { Slant as Hamburger } from 'hamburger-react'
import resume from "../../assets/jeremyLouieResume.pdf"

const Menu: React.FC = () => {
    const menuSize = 35;
    
    const dropDownRef = useRef(null);
    const [isOpen, setOpen] = useState(false);
    const handleToggle = () => {
        setOpen(!isOpen)
    };

    return (
        <div className="menu_wrapper" onClick={handleToggle}>
            <Hamburger size={menuSize} direction="left" distance="sm" toggled={isOpen} rounded />
            <nav ref={dropDownRef} className={`menu ${isOpen ? 'active' : 'inactive'}`}>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#worked">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=%6A%73%65%74%68%6C%75%69%40%67%2E%75%63%6C%61%2E%65%64%75" target="_blank" rel="noreferrer">Contact</a></li>
                    <li><a href={resume} target="_blank" rel="noreferrer">Resume</a></li>
                </ul>
            </nav>

        </div>
    );
};

export default Menu;