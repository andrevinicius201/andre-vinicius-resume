import React from "react";
import { Accordion } from 'flowbite-react';

import Menu from "./components/Menu";
import About from "./components/About";
import WorkingHistory from "./components/WorkingHistory";
import Certifications from "./components/Certifications";
import Skills from "./components/Skills";
import ContentAccordion from "./components/ContentAccordion";
 
function App() {
    return (
        <div className="max-w-full">
            <Menu/>
            <About/>
            <Skills/>
            <WorkingHistory/>
            <Certifications/>
        </div>
        
            
        
    );
}
 
export default App;