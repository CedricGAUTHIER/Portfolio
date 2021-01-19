import React from 'react';

import './style.scss';
import Presentation from '../Presentation';


const Nav=({presentationOpened, setPresentationOpened}) => {
    
        
        return (
        
        <div className="nav">
            
            <ul className="nav-ul">
                <li className="nav-li">
                    <button
                        className="nav-button"
                        onClick={()=>{
                            setPresentationOpened(!presentationOpened);
                        }}
                        >Présentation
                    </button>
                    
                        
                </li>
                <li className="nav-li">
                    <button
                        className="nav-button"
                        >Avant d'être développeur</button>
                        
                    </li>
                <li className="nav-li">
                    <button
                        className="nav-button"
                        >Ma formation de développeur</button>
                        
                    </li>
                <li className="nav-li">
                    <button
                        className="nav-button"
                        >Et après ? </button>
                        
                    </li>
                <li className="nav-li">
                    <button
                        className="nav-button"
                        >Mon CV </button>
                        
                    </li>
                <li className="nav-li">
                    <button
                        className="nav-button"
                        >Projets / Réalisations </button>
                        
                    </li>
                <li className="nav-li">
                    <button
                        className="nav-button"
                        >Me contacter </button>
                        
                    </li>
                
            </ul>
            {presentationOpened && <Presentation /> }
            
        </div>
    );
}

export default Nav;