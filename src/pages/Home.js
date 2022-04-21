
import React from 'react'
import "./Home.css"
import "./Scrollbar.css"
import Intro from "./components/Intro.js"
import About from "./components/About.js"
import Worked from "./components/Worked.js"
import Projects from "./components/Projects.js"
import Footer from "./components/Footer.js"
import Thanks from "./components/Thanks.js"
import Menu from "./components/Menu.js"

const Home: React.FC = () => {
    return (
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

            <div className="footer">
                <Footer />
            </div>
        </div>
    );
};

export default Home;
