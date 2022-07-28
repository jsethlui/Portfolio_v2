
import React from 'react'
import { useEffect } from 'react';
import "./Home.css"
import "./Scrollbar.css"
import Intro from "./components/Intro.js"
import About from "./components/About.js"
import Worked from "./components/Worked.js"
import Projects from "./components/Projects.js"
import Footer from "./components/Footer.js"
import Thanks from "./components/Thanks.js"
import Menu from "./components/Menu.js"
import Reveal from "react-reveal/Fade";

const Home: React.FC = () => {
    return (
        <div className="body">
            <Menu />
            <Intro />
            
            <Reveal>
                <div id="about" />
                <About />
            </Reveal>

            <Reveal>
                <div id="worked" />
                <Worked />
            </Reveal>

            <Reveal>
                <div id="projects" />
                <Projects />
            </Reveal>

            <div id="thanks" />
            <Thanks />

            <div className="footer">
                <Footer />
            </div>
        </div>
    );
};

export default Home;
