import React from 'react'
import { FormContainer, ContactForm, ContactInput, ContactSubmit, TextInput, FormTitle } from './FormStyles'

function Form() {

    return (
        <FormContainer>
            <FormTitle>Contactame</FormTitle>
            <ContactForm action="https://formsubmit.co/2414f39d3cb0a009504e484b14e1bb24" method="POST">
                <ContactInput type="text" name="name" placeholder="Nombre" required/>
                <ContactInput type="email" name="email" placeholder="Mail" required/>
                <TextInput type="text" name="message" placeholder="Tu mensaje" required/>
                <input type="hidden" name="_captcha" value="false"></input>
                <ContactSubmit type="submit">Enviar</ContactSubmit>
            </ContactForm>
        </FormContainer>
    )
}

export default Form
