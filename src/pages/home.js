
import React from "react";
import "./home.css";
import "./scrollbar.css"
import { UilLinkedin, 
         UilGithub,
         UilInfoCircle } from "@iconscout/react-unicons";
import Intro from "./components/Intro.js"
import About from "./components/About.js"
import Menu from "./menu";

const Home: React.FC = () => {
    const iconSize = 32.5;

    return (
        <div>
            <Menu />
            <Intro />
            <About />
        </div>
    );
};

export default Home;