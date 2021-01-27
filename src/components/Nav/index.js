import React from 'react';
import { FaIndustry, FaProjectDiagram, FaUserAstronaut } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { GiMedallist, GiMonaLisa } from "react-icons/gi";
import { TiContacts } from "react-icons/ti";
import './style.scss';
import About from '../About';
import Before from '../Before';
import Training from '../Training';
import Now from '../Now';
import CV from '../CV';
import Projects from '../Projects';
import Contact from '../Contact';


const Nav=({ itemsOpenedObject, setItemsOpenedObject,itemsVisitedObject, setItemsVisitedObject }) => {
    const items=Object.keys(itemsOpenedObject);
    let liParams = {};
    let itemsFalse = {}
    items.forEach(item => {
        itemsFalse={
            ...itemsFalse,
            [item]:false
        }
        liParams={
            ...liParams,
            [item]:{class:'', label:''}
        }
        
        liParams[item].class = itemsVisitedObject[item] ? "nav-button-visited" : "nav-button";
        switch (item) {
            case 'About':
                liParams[item].label = " Qui suis-je ?";
                break;
            case 'Before':
                liParams[item].label = " Avant d'être développeur";
                break;
            case 'Training':
                liParams[item].label = " Ma formation de développeur";
                break;
            case 'Now':
                liParams[item].label = " Et maintenant ?";
                break; 
            case 'CV':
                liParams[item].label = " Mon CV";
                break;
            case 'Projects':
                liParams[item].label = " Projets / Réalisations";
                break;
            case 'Contact':
                liParams[item].label = " Me contacter";
                break;
            default:
                break;
        }
        
        

    }); 
    
    
        return (
        
        <div className="nav">
            
            <ul className="nav-ul">
                {items.map((item) => {
                    return(
                        <li key={item} className="nav-li">
                            <button
                                className={liParams[item].class}
                                name={item}
                                onClick={(evt)=>{
                                    
                                    setItemsOpenedObject(
                                        {...itemsFalse,[item]: !itemsOpenedObject[item],}
                                        
                                    );
                                    setItemsVisitedObject(
                                        {...itemsVisitedObject, [item]:true}
                                    )
                                        
                             
                            }}
                            >
                            {(item==="About") && <FaUserAstronaut /> }
                            {(item==="Before") && <FaIndustry /> }
                            {(item==="Training") && <MdComputer /> }
                            {(item==="Now") && <GiMedallist /> }
                            {(item==="CV") && <GiMonaLisa /> }
                            {(item==="Projects") && <FaProjectDiagram /> }
                            {(item==="Contact") && <TiContacts /> }
                            
                            
                             {liParams[item].label}
                            </button>
                        </li>
                    )
                })}
                
                
                
                
                
                
                
                
                
            </ul>
            
            
            {itemsOpenedObject.About && <About /> }
            {itemsOpenedObject.Before && <Before /> }
            {itemsOpenedObject.Training && <Training /> }
            {itemsOpenedObject.Now && <Now /> }
            {itemsOpenedObject.CV && <CV /> }
            {itemsOpenedObject.Projects && <Projects /> }
            {itemsOpenedObject.Contact && <Contact itemsOpenedObject={itemsOpenedObject} setItemsOpenedObject={setItemsOpenedObject} itemsFalse={itemsFalse} /> }
        </div>
    );
}

export default Nav;

