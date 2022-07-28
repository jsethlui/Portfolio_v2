
import React from "react"
import "./Worked.css"
import { Tab,
         Tabs,
         TabList,
         TabPanel } from "react-tabs"

const Worked: React.FC = () => {
    return (
        <div className="worked_wrapper">
            <h1>Where I've Worked</h1>
            <div className="skills_wrapper">
                <p>Software Development</p>
                <p className="bullet">•</p>
                <p>Web Design</p>
                <p className="bullet">•</p>
                <p>Instruction</p>
            </div>
            <Tabs style={{display: "flex"}}>
                <TabList>
                    <Tab>UCLA Atlas Scientific</Tab>
                    <Tab>Pocket Racers</Tab>
                    <Tab>Juni Learning</Tab>
                </TabList>


                {/* atlas scientific */}
                <TabPanel>
                    <div className="tab_panel_cell">
                        <h2>
                            <a href="https://atlas-scientific.com/?gclid=CjwKCAjwoduRBhA4EiwACL5RPxZBJaxTNNsfTJ2gFKxVIYw2wRsUgp9IjIgWa1LeARFWNCAu9FWRjRoCTtcQAvD_BwE" target="_blank" rel="noreferrer" className="animated_link">
                                Software Developer
                            </a>
                        </h2>
                        <p>November 2021 to Present</p>
                        <ul>
                            <li>Worked closely with Hardware Engineer, Lab Researchers, and Supervisors to develop smart water filtration system</li>
                            <li>Improved efficiency by developing code to fully automate water data collection scripts</li>
                            <li>Proposed and lead shift towards Google Cloud based system architecture</li>
                            <li>Increased data scalability by leading transition towards Google Firestore</li>
                        </ul>
                        <div className="tools_wrapper">
                            <p>Technology & Tools</p>
                            <ul>
                                <li>Python3</li>
                                <li>Raspberry Pi</li>
                                <li>Google Cloud</li>
                                <li>Cloud Firestore</li>
                            </ul>
                        </div>
                    </div>
                </TabPanel>

                {/* pocket racers */}
                <TabPanel>
                    <div className="tab_panel_cell">
                        <h2>
                            <a href="https://scaledautonomousracing.github.io/PocketRacer/" target="_blank" rel="noreferrer" className="animated_link">
                                Website Developer & Researcher
                            </a>
                        </h2>
                        <p>November 2021 to Present</p>
                        <ul>
                            <li>Redesigned Pocket Racer’s website to promote project mission: to make self-driving autonomous cars more accessible and fun</li>
                            <li>Implemented Google Analytics tracking, email services, and UI using HTML, CSS, and JavaScript</li>
                            <li>Reduced website maintenance costs to 100% by switching from Squarespace to Github Pages</li>
                            <li>Ported Robot Operating System from Raspberry Pi to Jetson Xavier NX to enable real-time deep RL</li>
                        </ul>
                        <div className="tools_wrapper">
                            <p>Technology & Tools</p>
                            <ul>
                                <li>GitHub Pages</li>
                                <li>Google Maps Platform API</li>
                                <li>Jetson Xavier NX</li>
                            </ul>
                        </div>
                    </div>
                </TabPanel>

                {/* juni learning */}
                <TabPanel>
                    <div className="tab_panel_cell">
                        <h2>
                            <a href="https://junilearning.com/?utm_source=GoogleAdsBrand&utm_medium=CPC&utm_campaign=Search_Branding&utm_term=SB_MainBrandKeywords&campaignid=12948300383&adgroupid=124512289849&adid=572793634987&gclid=CjwKCAjwoduRBhA4EiwACL5RP2nJjEFXp4f5-OV8A8rOHy9MClDVjSkDKkZxPHtkLzqQIg0LsO0sahoC7zsQAvD_BwE" target="_blank" rel="noreferrer" className="animated_link" className="animated_link">
                                Computer Science Instructor
                            </a>
                        </h2>
                        <p>November 2021 to Present</p>
                        <ul>
                            <li>Privately tutored students in courses ranging from Intro to C++ to Python Algorithms</li>
                            <li>Provided student progress and learning assessment updates with parents on a daily basis</li>
                            <li>Launched first-ever iOS Development Club to teach students about Swift UIKit</li>
                        </ul>
                        <div className="tools_wrapper">
                            <p>Technology & Tools</p>
                            <ul>
                                <li>Python3</li>
                                <li>Java</li>
                                <li>C++</li>
                                <li>Swift</li>
                            </ul>
                        </div>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Worked;