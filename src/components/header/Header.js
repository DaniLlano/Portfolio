import React from 'react'
import { Navbar, Menu, List, Anchor } from './HeaderStyles'

function Header() {
    return (
            <Navbar>
                <Menu>
                    <List><Anchor href="#">Proyectos</Anchor></List>
                    <List><Anchor href="#">Redes</Anchor></List>
                </Menu>
            </Navbar>
    )
}

export default Header
