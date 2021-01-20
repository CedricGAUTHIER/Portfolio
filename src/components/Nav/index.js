import React from 'react';

import './style.scss';
import About from '../About';
import Before from '../Before';
import Training from '../Training';
import Now from '../Now';
import CV from '../CV';
import Projects from '../Projects';
import Contact from '../Contact';


const Nav=({navObject, setNavObject, buttonObject, setButtonObject}) => {
    const ClassAbout= buttonObject.about ? "nav-button-visited" : "nav-button";
    const ClassBefore= buttonObject.before ? "nav-button-visited" : "nav-button";
    const ClassTraining= buttonObject.training ? "nav-button-visited" : "nav-button";
    const ClassNow= buttonObject.now ? "nav-button-visited" : "nav-button";
    const ClassCV= buttonObject.cv ? "nav-button-visited" : "nav-button";
    const ClassProjects= buttonObject.projects ? "nav-button-visited" : "nav-button";
    const ClassContact= buttonObject.contact ? "nav-button-visited" : "nav-button";
        return (
        
        <div className="nav">
            
            <ul className="nav-ul">
                <li className="nav-li">
                    
                    <button
                        className={ClassAbout}
                        onClick={()=>{
                            setNavObject({
                                about: !navObject.about,
                                before: false,
                                training: false,
                                now: false,
                                cv: false,
                                projects:false,
                                contact: false
                            });
                             setButtonObject({...buttonObject,about:true})
                        }}
                        >Qui suis-je ?
                    </button>
                    
                        
                </li>
                <li className="nav-li">
                    <button
                        className={ClassBefore}
                        onClick={()=>{
                            
                            setNavObject({
                                about: false,
                                before: !navObject.before,
                                training: false,
                                now: false,
                                cv: false,
                                projects:false,
                                contact: false
                            });
                            setButtonObject({...buttonObject,before:true})
                        }}
                        >Avant d'être développeur</button>
                        
                    </li>
                <li className="nav-li">
                    <button
                        className={ClassTraining}
                        onClick={()=>{
                            
                            setNavObject({
                                about: false,
                                before: false,
                                training: !navObject.training,
                                now: false,
                                cv: false,
                                projects:false,
                                contact: false
                            });
                            setButtonObject({...buttonObject,training:true})
                        }}
                        >Ma formation de développeur</button>
                        
                    </li>
                <li className="nav-li">
                    <button
                        className={ClassNow}
                        onClick={()=>{
                            
                            setNavObject({
                                about: false,
                                before: false,
                                training: false,
                                now: !navObject.now,
                                cv: false,
                                projects:false,
                                contact: false
                            });
                            setButtonObject({...buttonObject,now:true})
                        }}
                        >Et maintenant ? </button>
                        
                    </li>
                <li className="nav-li">
                    <button
                        className={ClassCV}
                        onClick={()=>{
                            
                            setNavObject({
                                about: false,
                                before: false,
                                training: false,
                                now: false,
                                cv: !navObject.cv,
                                projects:false,
                                contact: false
                            });
                            setButtonObject({...buttonObject,cv:true})
                        }}
                        >Mon CV </button>
                        
                    </li>
                <li className="nav-li">
                    <button
                        className={ClassProjects}
                        onClick={()=>{
                            
                            setNavObject({
                                about: false,
                                before: false,
                                training: false,
                                now: false,
                                cv: false,
                                projects:!navObject.projects,
                                contact: false
                            });
                            setButtonObject({...buttonObject,projects:true})
                        }}
                        >Projets / Réalisations </button>
                        
                    </li>
                <li className="nav-li">
                    <button
                        className={ClassContact}
                        onClick={()=>{
                            
                            setNavObject({
                                about: false,
                                before: false,
                                training: false,
                                now: false,
                                cv: false,
                                projects:false,
                                contact: !navObject.contact
                            });
                            setButtonObject({...buttonObject,contact:true})
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