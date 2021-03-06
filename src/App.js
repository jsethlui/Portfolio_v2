
import React, { useEffect } from "react";
import ReactGA from 'react-ga';
import "./App.css";
import Main from "./Main";

const TRACKING_ID = "UA-226515105-1";
ReactGA.initialize(TRACKING_ID);

const App: React.FC = () => {
    useEffect(() => {
        document.title = "Jeremy Louie"
    }, [])

    return (
        <div className="App">
            <Main />
        </div>
  );
};

export default App;