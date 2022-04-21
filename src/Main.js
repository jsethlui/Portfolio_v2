
import React from "react";
import ReactGA from 'react-ga';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";

const Main: React.FC = () => {
    ReactGA.pageview(window.location.pathname);

    return (
        <BrowserRouter>
            {" "}
            <Routes>
                <Route path="/" element={<Home />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Main;