
import React from "react";
import "./Home.css";
import "./scrollbar.css"
import Intro from "./components/Intro.js"
import About from "./components/About.js"
import Worked from "./components/Worked.js"
import Projects from "./components/Projects.js"
import Footer from "./components/Footer.js"
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

            <div id="projects" />
            <Projects />

            <Footer />
        </div>
    );
};

export default Home;