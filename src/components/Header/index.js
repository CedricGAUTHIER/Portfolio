import React from 'react';
import './style.scss';
import Particles from "react-tsparticles";
import particlesOptions from "../../particles.json";

const Header=() => {
    return (
        <div className="header">
            <Particles options={particlesOptions}/>
            <div className="header-title">
                titre
            </div>
            <div className="header-section">
                section
            </div>
        </div>
    );
}

export default Header;