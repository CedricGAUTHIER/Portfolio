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
            <Particles className="particles" options={particlesOptions}/>
            <Header /> 
            <Main />
            <Nav
                
                itemsOpenedObject={itemsOpenedObject}
                setItemsOpenedObject={setItemsOpenedObject}
                itemsVisitedObject={itemsVisitedObject}
                setItemsVisitedObject={setItemsVisitedObject}
                
                
            />
        </div>
    );
}

export default App;
