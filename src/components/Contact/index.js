import React from 'react';
import './style.scss';
import { TiContacts } from "react-icons/ti";
import * as emailjs from "emailjs-com";


const Contact=({setNavObject}) => {
    const handleSubmit=({firstname, lastname, email, company, message})=>{
        console.log("firstname",firstname.value);
        console.log("lastname",lastname.value);
        console.log("email",email.value);
        console.log("company",company.value);
        console.log("message",message.value);
        
        const templateParams= {
            from_name: `${firstname.value} ${lastname.value}`,
            from_company: company.value,
            to_name: `Portfolio`,
            message: message.value,
        }
        
        emailjs.send('service_8bo9x68', 'template_t6likdi', templateParams, 'user_NtiPFI8UxjU8Eb9IstYyn')
        .then((resp) => {
            // successCallback();
            console.log('FIRE EMAIL SUCCESS!', resp.status, resp.text);
          }, (err) => {
            // failureCallback();
             console.log('FIRE EMAIL FAILED...', err);
          });
        
          setNavObject({contact:false});
        
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



