
import React from "react";
import "./Home.css";
import "./scrollbar.css"
import Intro from "./components/Intro.js"
import About from "./components/About.js"
import Worked from "./components/Worked.js"
import Menu from "./menu";

const Home: React.FC = () => {
    return (
        <div>
            <Menu />
            <Intro />
            
            <div id="about" />
            <About />

            <div id="worked" />
            <Worked />
        </div>
    );
};

export default Home;