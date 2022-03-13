
import React from "react";
import "./menu.css";
import { Slant as Hamburger } from 'hamburger-react'

const menuSize = 32.5;
const Menu: React.FC = () => {
    return (
        <Hamburger size={menuSize} rounded />
    );
};

export default Menu;