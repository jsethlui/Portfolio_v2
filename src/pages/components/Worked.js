
import React from "react";
import "./Worked.css"
import { Tab,
         Tabs,
         TabList,
         TabPanel } from "react-tabs";

const Worked: React.FC = () => {
    return (
        <div className="tabs_wrapper">
            <Tabs>
                <TabList>
                    <Tab>Atlas Scientific</Tab>
                    <Tab>Pocket Racers</Tab>
                    <Tab>Juni Learning</Tab>
                </TabList>

                {/* atlas scientific */}
                <TabPanel>
                    <h2>atlas scientific</h2>
                </TabPanel>

                {/* pocket racers */}
                <TabPanel>
                    <h2>pocket racers</h2>
                </TabPanel>

                {/* juni learning */}
                <TabPanel>
                    <h2>juni learning</h2>
                </TabPanel>                
            </Tabs>
        </div>
    );
};

export default Worked;