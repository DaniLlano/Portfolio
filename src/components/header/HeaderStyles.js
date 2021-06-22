import styled from 'styled-components'

export const Navbar = styled.div`
display: flex;
justify-content: space-around;
`

export const Menu = styled.ul`
list-style: none;
display: flex;
`

export const List = styled.li`
padding: 2rem;
font-weight: 500;
font-size: clamp(1rem, 2.5vw, 1.2rem);
cursor: pointer;
`

export const Anchor = styled.a`
color: #15202B;
position: relative;
text-decoration: none;
transition: color .4s ease-out;

:hover {
    color: #7510F7;
    right: 0;
    text-decoration: none;
}

:hover:after {
    border-color: #7510F7;
    right: 0;
}

:after {
    border-top: .1em solid #fff;
    content: "";
    position: absolute;
    right: 100%;
    top: 2rem;
    left: 0;
    transition: right .4s cubic-bezier(0,.5,0,1), border-color .4s ease-out;
}
`
