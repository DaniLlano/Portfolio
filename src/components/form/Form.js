import React from 'react'
import { FormContainer, ContactForm, ContactInput, ContactSubmit, TextInput, FormTitle } from './FormStyles'

function Form() {
    return (
        <FormContainer>
            <FormTitle>Contactame</FormTitle>
            <ContactForm action="https://getform.io/f/6beb522b-c5f3-4b9e-a245-a38491539538">
                <ContactInput type="text" name="name" placeholder="Nombre" required/>
                <ContactInput type="email" name="email" placeholder="Mail" required/>
                <TextInput type="text" name="message" placeholder="Tu mensaje" required/>
                <ContactSubmit type="submit">Enviar</ContactSubmit>
            </ContactForm>
        </FormContainer>
    )
}

export default Form
