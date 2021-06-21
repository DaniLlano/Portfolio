import React from 'react'
import {ProjectsContainer, ProjectsTitle, CardContainer, Card} from "./ProjectsStyles"

function Projects() {
    return (
        <ProjectsContainer>
            <ProjectsTitle>Algunos Proyectos</ProjectsTitle>
            <CardContainer>
            <Card/>
            <Card/>
            <Card/>
            </CardContainer>
        </ProjectsContainer>
    )
}

export default Projects
