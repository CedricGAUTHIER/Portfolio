import React,{ useState } from 'react';
import Particles from "react-tsparticles";
import './styles.scss';
import particlesOptions from "../../particles.json";
import Header from "../Header";
import Main from "../Main";
import Nav from "../Nav";

const App=() => {
    const [presentationOpened,setPresentationOpened]=useState(false);
    
    return (
        <div className="app">
            <Particles className="particles" options={particlesOptions}/>
            <Header /> 
            <Main />
            <Nav
                presentationOpened={presentationOpened}
                setPresentationOpened={setPresentationOpened}
            />
        </div>
    );
}

export default App;
