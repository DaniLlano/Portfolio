import styled from "styled-components"

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 60%;
margin: auto;
padding: 4rem 0;
color: #141c3a;
`

export const Titulo = styled.h1`
padding-bottom: 1.5rem;
font-size: clamp(1.5rem, 2.5vw, 2rem);
`

export const Subtitulo = styled.h3`
text-decoration: underline #7510F7;
padding-bottom: 2rem;
font-size: clamp(1rem, 2.5vw, 1.3rem);
`

export const AboutMe = styled.p`
text-align: center;
padding-bottom: 1rem;
font-size: clamp(0.8rem, 2.5vw, 1rem)
`