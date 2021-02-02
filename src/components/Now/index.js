import React from 'react';
import './now.scss';
import { GiMedallist } from "react-icons/gi";
import { TiContacts } from "react-icons/ti";
const Now=() => {
    
    return (
        <div className="content">
            <h1 className="content-title">
                <GiMedallist /> Et maintenant ? <GiMedallist /> 
            </h1>
            <hr></hr>
            <div className="content-text-scroll">
                <p>
                    Et maintenant, <strong>on continue :</strong> 
                </p>
                <ul>
                    <li className="done">Finaliser ce portfolio.</li>
                    <li>Se mettre sérieusement sur des projets persos.</li>
                    <li>Trouver un job rapidement.</li>
                </ul>    
                
                
                
                <hr></hr>
                <p>
                    Avis à mon futur employeur:
                </p> 
                <p>
                    Je recherche un job où <strong>je prendrais du plaisir avant tout. </strong>
                    C’est-à-dire, travailler avec des personnes <strong>bienveillantes</strong> qui se souviennent que je suis un être humain avant d’être une valeur ajoutée.
                </p> 
                <p>    
                    De préférence en <strong>full remote</strong> mais du <strong>remote</strong> peut convenir aussi (ex: 1 déplacement / mois sur Paris ou Toulouse).
                    Du remote car mon village est un peu isolé et je préfère dépenser mon énergie au service de mon employeur plutôt que dans les transports. L’avenir est là. Si vous êtes anti-Remote, passez votre chemin.
                </p> 
                <p>
                    <strong>Apprendre est mon moteur.</strong>
                </p> 
                <p>    
                    Vous voulez que ça roule ? apprenez moi de nouvelles technos, faites-moi évoluer, je n’attends que cela.
                </p> 
                <p>    
                    <strong>Vous avez le job qui correspond à cette description ?</strong> N’attendez plus, <strong>contactez-moi</strong> (rubrique <em> <TiContacts /> Me contacter</em>) 

                </p>
                    </div>
        </div>
    );
}

export default Now;