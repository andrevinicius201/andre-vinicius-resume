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
        <div>
            <Menu/>
            <About/>
            {/* <ContentAccordion/> */}
            <WorkingHistory/>
            <Certifications/>
            <Skills/>

        </div>
        
            
        
    );
}
 
export default App;