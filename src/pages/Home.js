
import React, {useEffect } from 'react'
import ReactGA from 'react-ga'
import "./Home.css"
import "./Scrollbar.css"
import Intro from "./components/Intro.js"
import About from "./components/About.js"
import Worked from "./components/Worked.js"
import Projects from "./components/Projects.js"
import Footer from "./components/Footer.js"
import Thanks from "./components/Thanks.js"
import Menu from "./components/Menu.js"

const TRACKING_ID = "UA-199894373-2";
ReactGA.initialize(TRACKING_ID);

const Home: React.FC = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

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
