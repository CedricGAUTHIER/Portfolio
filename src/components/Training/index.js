import React from 'react';
import '../About/style.scss';
import { MdComputer } from "react-icons/md";
import { GiCakeSlice } from "react-icons/gi";
import { GrCloudComputer } from "react-icons/gr";
import { FaThumbsUp } from "react-icons/fa";
import { GoRocket } from "react-icons/go";

const Training=() => {
    
    return (
        <div className="content">
            <h1 className="content-title">
                <MdComputer /> Ma formation de développeur <MdComputer />
            </h1>
            <hr></hr>
            <div className="content-text">
                <p>
                    J’ai suivi une formation de développeur Fullstack Javascript <GiCakeSlice /> (<a href="https://oclock.io/formations/developpeur-web-fullstack-javascript" target="_blank" rel="noopener noreferrer">le programme </a>):
                </p>
                <hr></hr>
                <p>
                    Format téléprésentiel <GrCloudComputer /> avec:
                </p>
                <ul>
                    
                    <li>des cours à distance en live </li>
                    <li>le soir, après les cours: un challenge (devoir de minimum 2h)</li>
                    <li>des séances de pair-coding</li>
                    <li>des ateliers sur 1 journée en solo (un objectif à atteindre avec possibilité de demander de l’aide sous forme “d’issue”).</li>
                    <li>3 mois de socle: <strong>javascript - HTML - CSS - NodeJS - Express - PostgreSQL</strong></li>
                    <li>1 mois de spécialisation: <strong>API et DATA</strong> </li>
                    <li>1 mois de projet: <strong>équipe de 4 devs (2 fronts + 2 backs) en mode agile (j’étais lead back) : du cahier des charges à la mise en ligne.</strong></li>
                </ul>
                <p>
                    J’ai prolongé en me formant sur <strong>React/Redux.</strong>
                </p>
                <p>
                    La formation est plutôt intense et les profs sont au top. <FaThumbsUp /> 
                </p>
                <p>
                    Toutefois, j’ai bien conscience de ne pas être encore opérationnel à 100%.
                </p>
                <hr></hr>
                <p>
                    Cette formation c’est le “pied à l’étrier”, maintenant il faut apprendre les différentes allures (trot, galop….) et savoir si l’on veut faire plutôt de la course ou du saut….
                    Pour ma part, j’ai pris beaucoup de plaisir durant cette découverte et je suis prêt à foncer vers d’autres technos: <strong>php, python, symfonie, Angular, Vue….</strong>  
                    Alors si vous êtes prêt à investir sur un junior super motivé qui n’a pas encore de trop mauvaises habitudes : <strong>contactez-moi</strong> (rubrique <em>Me contacter</em>) et <strong>GOOOO</strong>. <GoRocket /><GoRocket /><GoRocket /> 
                </p>
                    </div>
        </div>
    );
}

export default Training;