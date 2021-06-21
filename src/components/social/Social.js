import React from 'react'
import {SocialContainer, SocialTitle, IconContainer, LinkedIn, Github} from "./SocialStyles"

function Social() {
    return (
    <div>
        <SocialContainer>
        <SocialTitle>Mis Redes</SocialTitle>
        <IconContainer>
        <a href="https://www.linkedin.com/in/daniela-llano/"><LinkedIn style={{ fontSize: 50 }} /></a>
        <a href="https://github.com/DaniLlano/"><Github style={{ fontSize: 40 }} /></a>
        </IconContainer>
        
            
        </SocialContainer>
    </div>
    )
}

export default Social
