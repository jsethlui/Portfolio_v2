
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";

const NoMatch: React.FC = () => {
    return <p>Error 404: Path not recognized.</p>;
};


const Main: React.FC = () => {
    return (
        <BrowserRouter>
            {" "}
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Main;