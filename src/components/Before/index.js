import React from 'react';
import '../About/style.scss';
import Emoji from 'react-emoji-render';

const Before=() => {
    
    return (
        <div className="content">
            <h1 className="content-before-title">
                Avant d'être développeur 
            </h1>
            <p>
                J’ai un BAC S options Physique / Chimie.<Emoji text=":)"/>
            </p>
            <p>            
                J’ai toujours été plus attiré par les Sciences que par les Lettres. Je suis plus rationnel qu’émotionnel.
            </p>
            <p>
                Après le bac, j’ai poursuivi avec un DUT Mesure Physique.
            </p>
            <hr></hr>
            <p>
                Comme la majorité des futurs étudiants, je ne savais pas quoi faire après le bac.
            </p>
            <p>
            J’ai hésité avec un DUT en informatique mais à l’époque, le PC n’était économiquement pas accessible.
            J’avais un CPC 464 (pour 464 octets, pas 464 Méga ou Giga). J’avais du mal à imaginer ce que je pourrais faire avec ce matériel. J’ai donc choisi une autre voie.
            Je n’ai pas de regrets car j’ai rencontré des gens très compétents (d’autres un peu moins quand même) et j’ai eu la chance de participer à différents projets très motivants (détection de défaut par vision).
            </p>
            <hr></hr>
            <p>
                Après le DUT, j’ai travaillé dans différents domaines de l’industrie (fabriquant de matière, automobile, plasturgie pour l’automobile, plasturgie pour la pharmacie, étalonnage) mais aussi dans la comptabilité.
            </p>
            <p>
                J’ai occupé des postes très différents (technicien d’essais, technicien qualité, métrologue, technicien développement, comptable, responsable de laboratoire….)
            </p>
            <hr></hr>
            <p>
                J’ai occupé beaucoup de postes car j’ai besoin de m’impliquer dans de nouveaux projets, faire des découvertes, apprendre.
                Si vous pouvez m’offrir cela en tant qu’employeur, je suis prêt à m’engager à vos côtés pour relever de nouveaux challenges.
            </p>

        </div>
    );
}

export default Before;