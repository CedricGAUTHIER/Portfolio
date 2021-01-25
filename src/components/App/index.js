import React,{ useState } from 'react';
import Particles from "react-tsparticles";
import './styles.scss';
import particlesOptions from "../../particles.json";
import Header from "../Header";
import Main from "../Main";
import Nav from "../Nav";

const App=() => {
    const [navObject,setNavObject]=useState({
        about: false,
        before: false,
        training: false,
        now: false,
        cv: false,
        projects:false,
        contact: false
    });
    const [buttonObject,setButtonObject]=useState({
        about: false,
        before: false,
        training: false,
        now: false,
        cv: false,
        projects:false,
        contact: false
    });
    
    
    return (
        <div className="app">
            <Particles className="particles" options={particlesOptions}/>
            <Header /> 
            <Main />
            <Nav
                navObject={navObject}
                setNavObject={setNavObject}
                buttonObject={buttonObject}
                setButtonObject={setButtonObject}
                
            />
        </div>
    );
}

export default App;
