import React from 'react'
import {SocialContainer, SocialTitle, IconContainer, LinkedIn, Github} from "./SocialStyles"

function Social() {
    return (
    <div>
        <SocialContainer>
        <SocialTitle>Mis Redes</SocialTitle>
        <IconContainer>
            <LinkedIn style={{ fontSize: 50 }} />
            <Github style={{ fontSize: 40 }} />
        </IconContainer>
        
            
        </SocialContainer>
    </div>
    )
}

export default Social
