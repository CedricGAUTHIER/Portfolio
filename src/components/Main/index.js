import React from 'react';
import './style.scss';
import photoCG from '../../assets/images/CG_mini.jpg';
import logoExpressNode from '../../assets/images/express-node.jpg';
import logoHtmlCssJs from '../../assets/images/html-css-js.png';
import logoReactRedux from '../../assets/images/images.jfif';
import logoPostgresql from '../../assets/images/postgreSQL.png'; 

const Main=() => {
    return (
        <div className="main">
            <img src={photoCG} className="main-photo-CG" alt="Cédric GAUTHIER" />
            <div className="main-titles">
                <h1 className= "main-title">
                    DEVELOPPEUR WEB NodeJS / ReactJS
                </h1>
                <h2 className= "main-subtitle">
                    Back: postgreSQL
                </h2>
                <h2 className= "main-subtitle">
                    Front: reactJS
                </h2>
            </div>
            <img src={logoHtmlCssJs} className="main-logoHtmlCssJs" alt="logo HTML-CSS-JS" />
            <div className="main-logos">
                <img src={logoReactRedux} className="main-logoReactRedux" alt="logo React-Redux" />
                <img src={logoPostgresql} className="main-logoPostgresql" alt="logo PostgreSQL" />
                <img src={logoExpressNode} className="main-logoExpressNode" alt="logo Express-Node" />
            </div>
        </div>
    );
}

export default Main;