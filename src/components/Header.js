import React from 'react'
import {Nav, Logo} from '../components/styles/Header.styled'
import {Button} from '../components/styles/Button.styled'

export default function Header(){
    return (
        <Nav>
            <Logo/>
            <Button>Try it Free</Button>            
        </Nav>
       
    )

}