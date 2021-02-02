import React,{ useState } from 'react';
import Particles from "react-tsparticles";
import './styles.scss';
import particlesOptions from "../../particles.json";
import { itemsOpened , itemsVisited }  from "../../datas";
import Header from "../Header";
import Main from "../Main";
import Nav from "../Nav";

const App=() => {
    const [itemsOpenedObject,setItemsOpenedObject]=useState(itemsOpened);
    const [itemsVisitedObject,setItemsVisitedObject]=useState(itemsVisited);
    
    
    return (
        <div className="app">
            <div className="app-particles">
                    <Particles  options={particlesOptions}/>
            </div> 
                
            <div className="app-header">
                <Header />
            </div>
            <div className="app-main">
                <Main />
            </div>
            <div className="app-nav">
                <Nav className="nav"
                    
                    itemsOpenedObject={itemsOpenedObject}
                    setItemsOpenedObject={setItemsOpenedObject}
                    itemsVisitedObject={itemsVisitedObject}
                    setItemsVisitedObject={setItemsVisitedObject}
                    
                    
                />
            </div>
            
        </div>
    );
}

export default App;
