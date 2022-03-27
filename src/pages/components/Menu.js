
import { React, useState } from "react";
import "./Menu.css";
import { Slant as Hamburger } from 'hamburger-react'

const Menu: React.FC = () => {
    const menuSize = 35;
    const [isOpen, setOpen] = useState(false);
    const handleToggle = () => {
        setOpen(!isOpen)
    };

    return (
        <div className="menu_wrapper">
            <Hamburger size={menuSize} distance="sm" onClick={handleToggle} rounded />
        </div>
    );
};

export default Menu;