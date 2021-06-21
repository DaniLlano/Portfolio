import styled from "styled-components";
import { ProjectsTitle } from "../projects/ProjectsStyles";
import { Container } from "../about/AboutStyles";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

export const SocialContainer = styled(Container)`
padding: 2rem 0;
`

export const SocialTitle = styled(ProjectsTitle)`
color: #141c3a;
font-weight: 500;
`

export const IconContainer = styled(Container)`
flex-direction: row;
padding: 0;
justify-content: space-around;
`

export const LinkedIn = styled(LinkedInIcon)`
color: #7510F7;
`

export const Github = styled(GitHubIcon)`
color: #7510F7;
`