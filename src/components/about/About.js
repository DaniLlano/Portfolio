import React from 'react'
import {Container, Titulo, Subtitulo, AboutMe} from "./AboutStyles"

function About() {
    return (
        <Container>
            <Titulo>Hola! Soy Daniela</Titulo>
            <Subtitulo>Front-end Developer</Subtitulo>
            <AboutMe>Desarrollo aplicaciones web en React, me estoy especializando en el stack M.E.R.N.</AboutMe>
            <AboutMe>Actualmente trabajo freelance o creo mis propios proyectos con el foco de crear servicios de alto rendimiento para el front y luego potenciarlo en el back-end con los nuevos conocimientos (Node.JS, Express.JS, MongoDB, PostgreSQL, entre otras).</AboutMe>
        </Container>
    )
}

export default About
