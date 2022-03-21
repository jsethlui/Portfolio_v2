
import React from "react";
import "./Worked.css"
import { Tab,
         Tabs,
         TabList,
         TabPanel } from "react-tabs";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// import 'react-tabs/style/react-tabs.css';

const Worked: React.FC = () => {
    return (
        <div>
            <Tabs style={{display: "flex"}}>
                <TabList>
                    <Tab>Atlas Scientific</Tab>
                    <Tab>Pocket Racers</Tab>
                    <Tab>Juni Learning</Tab>
                </TabList>


                {/* atlas scientific */}
                <TabPanel>
                    <div className="tab_panel_cell">
                        <h2>Software Developer</h2>
                        <p>November 2021 to Present</p>
                        <ul>
                            <li>Responsible for migrating all data to Google Cloud</li>
                            <li>Automatically migrated CSV data from Raspberry Pi to Firestore Database using Python Firestore API</li>
                            <li>Developed UI for collecting data in order to abstract Git and CLI for Biologist Researchers using Python Curses</li>
                        </ul>
                    </div>
                </TabPanel>

                {/* pocket racers */}
                <TabPanel>
                    <div className="tab_panel_cell">
                        <h2>Website Develoepr & Researcher</h2>
                        <p>November 2021 to Present</p>
                        <ul>
                            <li>Reduced website maintenance costs by 100% by porting hosting platform from Squarespace to Github Pages</li>
                            <li>Implemented consensually tracked user data using Google Analytics Reporting API</li>
                            <li>Ported over Robert Operating System (ROS) from Raspberry Pi to Jetson Xavier NX to enable real-time Deep Reinforcement Learning</li>
                            <li>Investigated Bayesian Optimization racing line strategies to calculate the shortest time traversed for an autonomous self-driving RC car</li>
                        </ul>
                    </div>
                </TabPanel>

                {/* juni learning */}
                <TabPanel>
                    <div className="tab_panel_cell">
                        <h2>Computer Science Instructor</h2>
                        <p>November 2021 to Present</p>
                        <ul>
                            <li>Privately tutored students in courses ranging from Intro to C++ to Python Algorithms</li>
                            <li>Provided student progress and learning assessment updates with parents on a daily basis</li>
                            <li>Launched first-ever iOS Development Club to teach students about Swift UIKit</li>
                        </ul>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Worked;