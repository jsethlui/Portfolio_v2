
import { React, useState, useRef } from "react";
import "./Menu.css";
import { Slant as Hamburger } from 'hamburger-react'

const Menu: React.FC = () => {
    const menuSize = 35;

    const dropDownRef = useRef(null);
    const [isOpen, setOpen] = useState(false);
    const handleToggle = () => {
        setOpen(!isOpen)
    };

    return (
        <div className="menu_wrapper" onClick={handleToggle}>
            <Hamburger size={menuSize} distance="sm" toggled={isOpen} rounded />
            <nav ref={dropDownRef} className={`menu ${isOpen ? 'active' : 'inactive'}`}>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#worked">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="contact">Contact</a></li>
                </ul>
            </nav>

        </div>
    );
};

export default Menu;