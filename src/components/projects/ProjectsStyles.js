import styled from "styled-components";

export const ProjectsContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: #7510F7;
color: #fff;
`

export const CardContainer = styled.div`
display: flex;
flex-wrap: wrap;
`

export const Card = styled.div`
width: 30vh;
height: 35vh;
background: red;
margin: 2rem;
`

export const ProjectsTitle = styled.h3`
font-size: clamp(1rem,2.5vw,1.3rem);
font-weight: 400;
padding: 3rem 0;
`