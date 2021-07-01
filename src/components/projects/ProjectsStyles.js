import styled from "styled-components";
import { Anchor } from "../header/HeaderStyles"

export const ProjectsContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: #7510F7;
color: #fafafa;
`

export const CardContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`

export const Card = styled.div`
display: flex;
flex-direction: column;
color: #000;
font-weight: 500;
width: 30vh;
height: 35vh;
border-radius: 0.7rem;
margin: 2rem;
background-color: #fafafa;
box-shadow: 2px 2px 4px #000000;
text-align: center;
`

export const ProjectsTitle = styled.h3`
font-size: clamp(1rem,2.5vw,1.3rem);
font-weight: 400;
padding: 3rem 0;
`

export const ProyectImg = styled.img`
width: 30vh;
height: 22vh;
border-radius: 0.7rem 0.7rem 0 0;
padding-bottom: 1rem;
display: block;
margin-left: auto;
margin-right: auto;
`

export const LinkContainer = styled.div`
height: 15%;
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: flex-end;
text-decoration: none;
padding-top: 3rem;
`

export const Links = styled(Anchor)`
:after {
    top: 1.5rem;
}
`