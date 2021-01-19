import React from 'react';
import Particles from "react-tsparticles";
import './styles.scss';
import particlesOptions from "../../particles.json";
import Header from "../Header";

const App=() => {
    return (
        <div className="app">
            <Particles options={particlesOptions}/>
            
            
            
            <Header /> 
            
        </div>
    );
}

export default App;
