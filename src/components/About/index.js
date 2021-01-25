import React from 'react';
import './style.scss';
import { FaUserAstronaut, FaSnowplow, FaIndustry, FaBroom } from "react-icons/fa";
import { GiMountaintop } from "react-icons/gi";
import { TiBusinessCard, TiContacts } from "react-icons/ti";
import { BsArrowRepeat } from "react-icons/bs";
import { MdComputer } from "react-icons/md";
import { GoRocket } from "react-icons/go";
import { RiSurgicalMaskLine } from "react-icons/ri"
// Qui suis-je ? SiAboutDotMe => import { SiAboutDotMe } from "react-icons/si";
// balai: FaBroom => import { FaBroom, FaIndustry, FaProjectDiagram, FaGlasses, FaSnowplow} from "react-icons/fa";
// before: FaIndustry
// training: MdComputer => import { MdComputer } from "react-icons/md";
// Now: GiMedalList => import { GiMedalList, GiMonaLisa, GiMountaintop } from "react-icons/gi";
// CV: GiMonaLisa
// Projets: FaProjectDiagram
// contact: TiContacts => import { TiContacts } from "react-icons/ti";
// Lunettes: FaGlasses
// Fusée: GoRocket => import { GoRocket } from "react-icons/go";
// Montagne: GiMountaintop
// Neige lourde: FaSnowplow


const About=() => {
    return (
        <div className="content">
            <h1 className="content-title">
                <FaUserAstronaut /> Qui suis-je ? <FaUserAstronaut />
            </h1>
            <hr></hr>
            <div className="content-text-scroll">  
                <p>
                    C’est un peu mégalo de commencer comme cela.    
                </p>
                <p>
                    Un petit point rapide sur qui je suis :    
                </p>
                <hr></hr>
                <p>
                    <strong>Cédric GAUTHIER</strong>, j’ai 46 ans et je vis dans un très charmant village de moyenne montagne en Savoie <GiMountaintop /> (au centre du triangle Chamonix, Annecy, Albertville).
                    Pour finir la carte postale <TiBusinessCard /> , je dirais que les paysages sont magnifiques et que c’est encore plus beau l’hiver même si la neige peut-être très lourde <FaSnowplow /> . 
                    <strong> Mais ce qui vous intéresse c’est plutôt la partie développeur, non ?</strong>
                </p>
                <hr></hr>
                <p>
                    J’ai quitté mon ancien job en Mars 2020 (juste avant le confinement)  pour débuter une formation de 5 mois.
                    Il m’arrivait de “coder” en VBA pour Excel pour le boulot et j’aimais ça mais ce n’était qu’un début. La mentalité dans l’industrie (et peut-être plus encore dans la vallée de l’Arve) ne me convenait plus. Courir après la quantité plutôt que la qualité tout en vantant les bienfaits de la qualité me semblait de plus en plus compliqué.
                    Je n’avais pas envie de finir ma vie professionnelle dans ce domaine. Pour en savoir plus sur <strong>“ l’avant développeur ”</strong> voir la rubrique <em> <FaIndustry /> Avant d’être développeur</em>
                </p>
                <p>
                    Alors, j’ai tenté le coup : reconversion pro (c’était un temps où la covid-19 n’existait pas encore <RiSurgicalMaskLine />) pour devenir développeur: voir la rubrique <em> <MdComputer /> Ma formation de développeur</em> pour <strong>plus de détails</strong>.
                </p>
                <p>
                    Ce qui me plaît dans le code c’est la possibilité de pouvoir automatiser des tâches quotidiennes (je ne parle pas ménage… <FaBroom />.)
                </p>
                <p>
                    Dans la totalité des jobs que j’ai effectué, il y avait toujours les mêmes tâches à répéter <BsArrowRepeat />. Des tableaux excel en doublon.
                </p>
                <p>
                J’ai la conviction qu’une application métier bien développée permet de ne pas répéter ces tâches et donc de gagner en productivité, fiabilité et en bien-être opérateur.
                </p>
                <p>
                    Si vous avez besoin d’une application métier dédiée, échanger sur ce sujet ou autre, n’hésitez pas à <strong>me contacter</strong> (rubrique <em> <TiContacts /> Me contacter</em>)
                </p>
                <p>
                Bonne visite !!! <GoRocket /><GoRocket /><GoRocket />
                </p>
            </div>
        </div>
    );
}

export default About;