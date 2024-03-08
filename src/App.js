import React from "react";
// import {
//     BrowserRouter as Router,
//     Routes,
//     Route,
// } from "react-router-dom";

import Menu from "./components/Menu";
import About from "./components/About";
import WorkingHistory from "./components/WorkingHistory";
import Certifications from "./components/Certifications";
import Skills from "./components/Skills";
 
function App() {
    return (
        <div>
            <Menu/>
            <About/>
            <WorkingHistory/>
            <Certifications/>
            <Skills/>
        </div>
        
            
        
    );
}
 
export default App;