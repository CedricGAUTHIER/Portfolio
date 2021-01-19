import React from 'react';
import './style.scss';


const Header=() => {
    return (
        <div className="header">
            <div className="header-title">
                    PORTFOLIO Cédric GAUTHIER
            </div>
            <div className="header-section">
                <p>
                    Curieux, recruteur ou futur employeur, je vous invite à découvrir mon portfolio afin de faire connaissance.
                </p>
                <p>
                    N'hésitez pas à me contacter pour de plus amples informations.
                </p> 
            </div>
        </div>
    );
}

export default Header;