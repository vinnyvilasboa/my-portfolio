import React from 'react';
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks  } from './NavbarElements'

//navbar component which will be in the index route hence why its index.jsx

/*
1.Create Navbar function component which is passed as whole into app.js to be displayed 
2. inside the navbar exists a few more components
3. the main ones right now being nav and nav logo. each one has its own unique component
4. When navlogo is clicked it just redirects back to home route. 


*/
const Navbar = ({toggle}) => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>Vinny Vilasboa Portfolio</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="work">Work</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="connect">Connect</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks onClick={event =>  window.open('https://docs.google.com/document/d/1ARud0I6XNcC-zbI-tn2dZObppLNx9yI7zfXiZnCU77Y/edit?usp=sharing')}>Resume</NavLinks>
                    </NavItem>
                </NavMenu>
            
            </NavbarContainer>

        </Nav>
        </>
    )
}

export default Navbar
