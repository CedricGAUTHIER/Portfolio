import React from 'react';
import './style.scss';
import { TiContacts } from "react-icons/ti";
import * as emailjs from "emailjs-com";


const Contact=({ itemsOpenedObject, setItemsOpenedObject,itemsFalse, messageSending, setMessageSending}) => {
    
    const handleSubmit=({firstname, lastname, email, company, message, checkboxcv })=>{
        const sendCV = checkboxcv.checked ? `Envoyer le CV par mail à ${email.value}`:`Pas besoin de CV`
        const templateParams= {
            from_name: `${firstname.value} ${lastname.value}`,
            from_company: company.value,
            to_name: `Portfolio`,
            message: message.value,
            sendCV,
        }
        
        emailjs.send('service_8bo9x68', 'template_t6likdi', templateParams, 'user_NtiPFI8UxjU8Eb9IstYyn')
        .then((resp) => {
            setMessageSending(true);
            console.log('SENDING EMAIL: SUCCESS!', resp.status, resp.text);
            alert("Le message a été envoyé");

        }, (err) => {
            setMessageSending(false)
            console.log('SENDING EMAIL: FAILED...', err);
            alert("Erreur lors de l'envoi du message. Le message n'a pas été envoyé")

        });
            
            setItemsOpenedObject({...itemsFalse, Contact: !itemsOpenedObject.Contact,});
            

            
        
        
    }
    return (
        <div className="content">
            <h1 className="content-title">
            <TiContacts /> Me contacter <TiContacts /> 
            </h1>
            <hr></hr>
            <div className="content-text">
                <form onSubmit={(evt)=>{
                    evt.preventDefault();
                    handleSubmit(evt.target);
                }
                }>
                    <div className="form">
                        <fieldset>
                            <div className="field-name">
                                <div>
                                    <label htmlFor="firstName">
                                        Prénom
                                        <span className="required">
                                            *
                                        </span>
                                    </label>
                                    <input className="firstName" type="text" name="firstname" placeholder="Prénom" required></input>
                                </div>
                                <div>
                                    <label htmlFor="lastName">
                                        Nom
                                        <span className="required">
                                            *
                                        </span>
                                    </label>
                                    <input className="lastName"type="text" name="lastname" placeholder="Nom" required></input>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset>
                            <div className="field-name">
                                <div>
                                    <label htmlFor="firstName">
                                        E - mail
                                        <span className="required">
                                            *
                                        </span>
                                    </label>
                                    <input className="email" type="email" name="email" placeholder="E-mail (pour la réponse)" required></input>
                                </div>
                                <div>
                                    <label htmlFor="lastName">Société</label>
                                    <input className="company" type="text" name="company" placeholder="Société"></input>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset>
                            <textarea className="message" name="message" placeholder="Votre message" required></textarea>
                        </fieldset>    
                        <fieldset>
                            <input className="checkboxcv" type="checkbox" name="checkboxcv" value="sendCV"></input>
                            <label htmlFor="checkbox-cv">Recevoir le CV par mail</label>
                        </fieldset>    
                        <fieldset className="field-send">
                            <button className="send">Envoyer le message</button>
                        </fieldset>
                        <div className="alert">
                            Les champs prénom, nom, e-mail et message sont obligatoires
                        </div>    
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;



