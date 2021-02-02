import React from 'react';
import './cv.scss';
import { GiMonaLisa } from "react-icons/gi";
import cv from "../../assets/images/CV_CedricGAUTHIER_WebDev.svg"
import { TiContacts } from "react-icons/ti";

const CV=() => {
    
    return (
        <div className="content">
            <h1 className="content-title">
                <GiMonaLisa /> Mon CV <GiMonaLisa /> 
            </h1>
            <hr></hr>
            <div className="content-text-scroll">
                <p>
                    N'hésitez pas à me contacter pour obtenir le CV en format pdf (rubrique <em> <TiContacts /> Me contacter</em>)
                </p>
                <img className="cv-image" src={cv} alt="CV de Cédric GAUTHIER"/>
            </div>
        </div>
    );
}

export default CV;