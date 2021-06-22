import React from 'react'
import {ProjectsContainer, ProjectsTitle, CardContainer, Card} from "./ProjectsStyles"

function Projects() {
    return (
        <ProjectsContainer>
            <ProjectsTitle>Algunos Proyectos</ProjectsTitle>
            <CardContainer>
            <Card>E-commerce PedimonYa</Card>
            <Card>Esputifai</Card>
            <Card>Memoria</Card>
            <Card>Rock, Paper, Scissors</Card>
            <Card>E-commerce React</Card>
            </CardContainer>
        </ProjectsContainer>
    )
}

export default Projects
