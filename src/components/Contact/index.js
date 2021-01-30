import React from 'react';
import './contact.scss';
import { TiContacts } from "react-icons/ti";
import { AiFillLinkedin } from "react-icons/ai";
import * as emailjs from "emailjs-com";


const Contact=({ itemsOpenedObject, setItemsOpenedObject,itemsFalse, messageSending, setMessageSending}) => {
    
    const handleSubmit=({firstname, lastname, email, company, message, checkboxcv })=>{
        const serviceId = process.env.REACT_APP_SERVICE_ID
        const templateId =process.env.REACT_APP_TEMPLATE_ID;
        const userId =process.env.REACT_APP_USER_ID;
        const sendCV = checkboxcv.checked ? `Envoyer le CV par mail à ${email.value}`:`Pas besoin de CV`
        const templateParams= {
            from_name: `${firstname.value} ${lastname.value}`,
            from_company: company.value,
            to_name: `Portfolio`,
            email: email.value,
            message: message.value,
            sendCV,
        }
        
        emailjs.send(serviceId, templateId, templateParams, userId)
        .then((resp) => {
            
            console.log('SENDING EMAIL: SUCCESS!', resp.status, resp.text);
            alert("Le message a été envoyé");

        }, (err) => {
            
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
            <p>
                <AiFillLinkedin />
                Linkedin : 
                <a href="https://www.linkedin.com/in/cedric-gauthier/">
                    https://www.linkedin.com/in/cedric-gauthier/
                </a>
            </p>
            
            <hr></hr>
            <div className="content-text-scroll">
                <form onSubmit={(evt)=>{
                    evt.preventDefault();
                    handleSubmit(evt.target);
                }
                }>
                    <div className="form">
                        <fieldset>
                            <div className="fields">
                                <div className="field">
                                    <div className="field-label">
                                        <label htmlFor="firstName">
                                            Prénom
                                            <span className="required">
                                                *
                                            </span>
                                        </label>
                                    </div>
                                    <div className="field-input">
                                        <input className="firstName" type="text" name="firstname" placeholder="Prénom" required></input>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="field-label">
                                        <label htmlFor="lastName">
                                            Nom
                                            <span className="required">
                                                *
                                            </span>
                                        </label>
                                    </div>
                                    <div className="field-input">
                                        <input className="lastName"type="text" name="lastname" placeholder="Nom" required></input>
                                    </div>
                                </div>
                            
                        
                            
                                <div className="field">
                                    <div className="field-label">
                                        <label htmlFor="email">
                                            E - mail
                                            <span className="required">
                                                *
                                            </span>
                                        </label>
                                    </div>
                                    <div className="field-input">
                                        <input className="email" type="email" name="email" placeholder="E-mail (pour la réponse)" required></input>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="field-label">
                                        <label htmlFor="lastName">Société</label>
                                    </div>
                                    <div className="field-input">
                                        <input className="company" type="text" name="company" placeholder="Société"></input>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset>
                            <div className="container-message">
                                <div className="message">
                                    <textarea   name="message" placeholder="Votre message" required></textarea>
                                </div>
                            </div>
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



