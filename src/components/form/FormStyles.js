import styled from "styled-components"

export const FormContainer = styled.div`
margin: 4rem auto 0rem auto;
display: flex;
flex-direction: column;
align-items: center;
width: 25rem;
height: auto;


@media (max-width: 480px) {
    width: 90%;
}
`


export const FormTitle = styled.h3`
margin: 1rem;
`

export const ContactForm = styled.form`
display: flex;
justify-content: center;
flex-direction: row;
flex-wrap: wrap;
align-items: center;
justify-content: space-evenly;
`

export const ContactInput = styled.input`
width: 40%;
margin: 0.5rem;
border: none;
border-bottom: 1px solid #7510F7;
outline: none;
padding: 0.3rem;

:focus {
    outline: none;
    border: 1px solid #7510F7;
    border-radius: 0.2rem;
    transition: border 0.4s ease-out;
}
`

export const TextInput = styled(ContactInput)`
width: 87%;
height: 4rem;
`

export const ContactSubmit = styled.button`
width: 8rem;
background-color: #fff;
border: 1px solid #7510F7;
border-radius: 0.5rem;
cursor: pointer;
padding: 0.4rem 0;
margin: 1rem;

:hover {
    background-color: rgba(0, 0, 0, 0.1);
    transition-duration: 0.4s;
}
`