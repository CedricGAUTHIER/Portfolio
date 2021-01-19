import React from 'react';
import Particles from "react-tsparticles";
import './styles.scss';
import particlesOptions from "../../particles.json";
import Header from "../Header";
import Main from "../Main";

const App=() => {
    return (
        <div className="app">
            <Particles options={particlesOptions}/>
            <Header /> 
            <Main />
            
        </div>
    );
}

export default App;
