
import React from "react";
import "./home.css";
import "./scrollbar.css"
import Intro from "./components/Intro.js"
import About from "./components/About.js"
import Menu from "./menu";

const Home: React.FC = () => {
    return (
        <div>
            <Menu />
            <Intro />
            
            <div id="about" />
            <About />
        </div>
    );
};

export default Home;