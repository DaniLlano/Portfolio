import React from 'react'
import { proyectos } from "../../data/data"
import {ProjectsContainer, ProjectsTitle, CardContainer, Card, ProyectImg, LinkContainer, Links} from "./ProjectsStyles"

function Projects() {
    return (
        <ProjectsContainer>
            <ProjectsTitle>Algunos Proyectos</ProjectsTitle>
            <CardContainer>
            {proyectos.map(item => 
                <Card key={item.id}>
                    <ProyectImg src={item.img}></ProyectImg>
                    <span>{item.nombre}</span>
                    <LinkContainer>
                        <Links href={item.github}>GitHub</Links>
                        <Links href={item.vercel}>Vercel</Links>
                    </LinkContainer>
                </Card>
            )}
            </CardContainer>
        </ProjectsContainer>
    )
}

export default Projects