
import React, { useEffect } from "react";
import "./App.css";
import Main from "./Main";

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