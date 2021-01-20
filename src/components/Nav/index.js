import React from 'react';

import './style.scss';
import About from '../About';
import Before from '../Before';
import Training from '../Training';
import Now from '../Now';
import CV from '../CV';
import Projects from '../Projects';
import Contact from '../Contact';


const Nav=({navObject, setnavObject}) => {
    
        return (
        
        <div className="nav">
            
            <ul className="nav-ul">
                <li className="nav-li">
                    <button
                        className="nav-button"
                        onClick={()=>{
                            
                            setnavObject({
                                about: !navObject.about,
                                before: false,
                                training: false,
                                now: false,
                                cv: false,
                                projects:false,
                                contact: false
                            });
                        }}
                        >Présentation
                    </button>
                    
                        
                </li>
                <li className="nav-li">
                    <button
                        className="nav-button"
                        onClick={()=>{
                            
                            setnavObject({
                                about: false,
                                before: !navObject.before,
                                training: false,
                                now: false,
                                cv: false,
                                projects:false,
                                contact: false
                            });
                        }}
                        >Avant d'être développeur</button>
                        
                    </li>
                <li className="nav-li">
                    <button
                        className="nav-button"
                        onClick={()=>{
                            
                            setnavObject({
                                about: false,
                                before: false,
                                training: !navObject.training,
                                now: false,
                                cv: false,
                                projects:false,
                                contact: false
                            });
                        }}
                        >Ma formation de développeur</button>
                        
                    </li>
                <li className="nav-li">
                    <button
                        className="nav-button"
                        onClick={()=>{
                            
                            setnavObject({
                                about: false,
                                before: false,
                                training: false,
                                now: !navObject.now,
                                cv: false,
                                projects:false,
                                contact: false
                            });
                        }}
                        >Et maintenant ? </button>
                        
                    </li>
                <li className="nav-li">
                    <button
                        className="nav-button"
                        onClick={()=>{
                            
                            setnavObject({
                                about: false,
                                before: false,
                                training: false,
                                now: false,
                                cv: !navObject.cv,
                                projects:false,
                                contact: false
                            });
                        }}
                        >Mon CV </button>
                        
                    </li>
                <li className="nav-li">
                    <button
                        className="nav-button"
                        onClick={()=>{
                            
                            setnavObject({
                                about: false,
                                before: false,
                                training: false,
                                now: false,
                                cv: false,
                                projects:!navObject.projects,
                                contact: false
                            });
                        }}
                        >Projets / Réalisations </button>
                        
                    </li>
                <li className="nav-li">
                    <button
                        className="nav-button"
                        onClick={()=>{
                            
                            setnavObject({
                                about: false,
                                before: false,
                                training: false,
                                now: false,
                                cv: false,
                                projects:false,
                                contact: !navObject.contact
                            });
                        }}
                        >Me contacter </button>
                        
                    </li>
                
            </ul>
            {navObject.about && <About /> }
            {navObject.before && <Before /> }
            {navObject.training && <Training /> }
            {navObject.now && <Now /> }
            {navObject.cv && <CV /> }
            {navObject.projects && <Projects /> }
            {navObject.contact && <Contact /> }
        </div>
    );
}

export default Nav;