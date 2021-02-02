import React from 'react';
import './projects.scss';
import { FaProjectDiagram, FaRegWindowClose } from "react-icons/fa";
import { TiContacts } from "react-icons/ti";
const Projects=() => {
    
    return (
        <div className="content">
            <h1 className="content-title">
                <FaProjectDiagram /> Projets / Réalisations <FaProjectDiagram /> 
            </h1>
            <div className="content-text-scroll">
                <p >
                    Il y a beaucoup de projets à réaliser. En fait, ce sont plutôt des idées de développement que de réels projets. Le but est principalement de travailler "mes acquis" (API REST, Login...) tout en testant de nouvelles fonctionnalités (paiement en ligne).
                    L'objectif est aussi de traiter ces différents sujets depuis la conception jusqu'à la mise en ligne.
                    Si l'un de ces sujets vous intéresse, ou si vous avez des idées à réaliser, prenons contact (N'hésitez pas à me contacter pour obtenir le CV en format pdf (rubrique <em> <TiContacts /> Me contacter</em>).
                    Maintenant que ce potfolio est en ligne, les projets vont pouvoir se concrétiser.
                </p>
                <hr></hr>
                <table >
                    <thead className="head">
                        <tr>
                            <th colSpan="5">Liste des mes projets/réalisations</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th colSpan="2"> Projet </th>
                            <th rowSpan="2"> Avancement </th>
                            <th colSpan="2"> Lien </th>
                        </tr>
                        <tr>
                            <th > Titre </th>
                            <th > Description </th>
                            <th > Github </th>
                            <th > En ligne </th>
                        </tr>
                        <tr>
                            <td > Portfolio </td> 
                            <td > Ce portfolio </td>
                            <td > En ligne </td>
                            <td > <a className="table-link"href="https://github.com/CedricGAUTHIER/Portfolio" target="_blank" rel="noopener noreferrer">lien Github</a> </td>
                            <td > <a className="table-link"href="http://cgauthier.portfolio.588dev.org/" target="_blank" rel="noopener noreferrer">cgauthier.portfolio.588dev.org</a> </td>
                        </tr>
                        <tr>
                            <td > transport-de-fret </td> 
                            <td > site pour une société de transport (projet de fin de formation) </td>
                            <td > Abandonné </td>
                            <td > <a className="table-link"href="https://github.com/CedricGAUTHIER/transport-de-fret" target="_blank" rel="noopener noreferrer">lien Github</a> </td>
                            <td > <FaRegWindowClose /> </td>
                        </tr>
                        <tr>
                            <td > 588_Videos </td> 
                            <td > Gestion d'une vidéothèque </td>
                            <td > En cours </td>
                            <td > <FaRegWindowClose /> </td>
                            <td > <FaRegWindowClose /> </td>
                        </tr>
                        <tr>
                            <td > 588_Bibli </td> 
                            <td > Gestion d'une bibliothèque </td>
                            <td > <FaRegWindowClose /> </td>
                            <td > <FaRegWindowClose /> </td>
                            <td > <FaRegWindowClose /> </td>
                        </tr>
                        <tr>
                            <td > 588_GMM </td> 
                            <td > Gestion de Moyen de Mesures (industrie)  </td>
                            <td > <FaRegWindowClose /> </td>
                            <td > <FaRegWindowClose /> </td>
                            <td > <FaRegWindowClose /> </td>
                        </tr>
                        <tr>
                            <td > 588_RPG </td> 
                            <td > Assistant pour RPG (interface de lancés de dés, gestion d'inventaire...) </td>
                            <td > <FaRegWindowClose /> </td>
                            <td > <FaRegWindowClose /> </td>
                            <td > <FaRegWindowClose /> </td>
                        </tr>
                        <tr>
                            <td > 588_WasTime </td> 
                            <td > Pour passer le temps (citations, météo, Quizz, jeux) </td>
                            <td > <FaRegWindowClose /> </td>
                            <td > <FaRegWindowClose /> </td>
                            <td > <FaRegWindowClose /> </td>
                        </tr>
                        <tr>
                            <td > 588_ChildApp </td> 
                            <td > Une appli pour les petits (relier les points, coloriage, tables de multiplication, anglais, grammaire, conjugaison, vocabulaire...) </td>
                            <td > <FaRegWindowClose /> </td>
                            <td > <FaRegWindowClose /> </td>
                            <td > <FaRegWindowClose /> </td>
                        </tr>
                        <tr>
                            <td > 588_HomeConsumption </td> 
                            <td > Une appli pour suivre les consommations (élec, eau...) à la maison </td>
                            <td > <FaRegWindowClose /> </td>
                            <td > <FaRegWindowClose /> </td>
                            <td > <FaRegWindowClose /> </td>
                        </tr>
                        <tr>
                            <td > 588_DayCare </td> 
                            <td > Une appli pour la gestion d'une garderie (planning, stats, facturation) </td>
                            <td > <FaRegWindowClose /> </td>
                            <td > <FaRegWindowClose /> </td>
                            <td > <FaRegWindowClose /> </td>
                        </tr>
                        <tr>
                            <td > 588_Planning </td> 
                            <td > Une appli pour la gestion de planning (équipe, projet...) </td>
                            <td > <FaRegWindowClose /> </td>
                            <td > <FaRegWindowClose /> </td>
                            <td > <FaRegWindowClose /> </td>
                        </tr>
                        <tr>
                            <td > 588_ClaiManagement </td> 
                            <td > Une appli pour la gestion des réclamations dans l'industrie (tableau de suivi, planning, action corrective...) </td>
                            <td > <FaRegWindowClose /> </td>
                            <td > <FaRegWindowClose /> </td>
                            <td > <FaRegWindowClose /> </td>
                        </tr>
                        <tr>
                            <td > 588_RiskAnalysis </td> 
                            <td > Une appli pour les analyses de risques (cotation, suivi....) </td>
                            <td > <FaRegWindowClose /> </td>
                            <td > <FaRegWindowClose /> </td>
                            <td > <FaRegWindowClose /> </td>
                        </tr>
                        <tr>
                            <td > 588_AntiFoodWaste </td> 
                            <td > Une appli anti gaspillage alimentaire qui proposera des recettes en fonction du contenu du réfrigérateur,qui alertera en fonction des dates de péremption et qui pourra établir une liste de course </td>
                            <td > <FaRegWindowClose /> </td>
                            <td > <FaRegWindowClose /> </td>
                            <td > <FaRegWindowClose /> </td>
                        </tr>
                        <tr>
                            <td > 588_RentAGite </td> 
                            <td > Une appli la location de gite (planning de résa, notation des propiétaires et des locataires, proposition d'activités....) </td>
                            <td > <FaRegWindowClose /> </td>
                            <td > <FaRegWindowClose /> </td>
                            <td > <FaRegWindowClose /> </td>
                        </tr>
                        <tr>
                            <td > 588_CnC </td> 
                            <td > Un site pour le click'n Collect d'un commerçant (planning, reservation, paiement) </td>
                            <td > <FaRegWindowClose /> </td>
                            <td > <FaRegWindowClose /> </td>
                            <td > <FaRegWindowClose /> </td>
                        </tr>
                        <tr>
                            <td > 588_Démog </td> 
                            <td > Un site pour exploiter les données démographiques publiques (graphes, tableaux...) </td>
                            <td > <FaRegWindowClose /> </td>
                            <td > <FaRegWindowClose /> </td>
                            <td > <FaRegWindowClose /> </td>
                        </tr>
                        
                    </tbody>
                </table>
                <p>
                    Nombre de projets: 17 - Nombre de réalisations: 1
                </p>
                
            </div>
        </div>
    );
}

export default Projects;