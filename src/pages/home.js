
import React from "react"
import "./Home.css"
import "./scrollbar.css"
import Intro from "./components/Intro.js"
import About from "./components/About.js"
import Worked from "./components/Worked.js"
import Projects from "./components/Projects.js"
import Footer from "./components/Footer.js"
import Thanks from "./components/Thanks.js"

import Menu from "./menu";

const Home: React.FC = () => {
    return (
        <div>
            <div className="body">
                <Menu />
                <Intro />
                
                <div id="about" />
                <About />

                <div id="worked" />
                <Worked />

                <div id="projects" />
                <Projects />

                <div id="thanks" />
                <Thanks />
            </div>

            <div className="footer">
                <Footer />
            </div>
        </div>
    );
};

export default Home;