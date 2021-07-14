import React, {useState, useEffect} from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks  } from './NavbarElements'
import {animateScroll as scroll} from 'react-scroll';
import {Button} from '../ButtonElement'
//navbar component which will be in the index route hence why its index.jsx

/*
1.Create Navbar function component which is passed as whole into app.js to be displayed 
2. inside the navbar exists a few more components
3. the main ones right now being nav and nav logo. each one has its own unique component
4. When navlogo is clicked it just redirects back to home route. 


*/
const Navbar = ({toggle}) => {

    const [scrollNav, setScrollNav] = useState(false)
    
    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        }else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome =() =>{
        scroll.scrollToTop();
    }

    return (
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}>Vinny Vilasboa</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}
                        >About Me</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services" smooth={true} duration={500} spy={true} exact='true' offset={-80}> Skills</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="work1" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Projects</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks onClick={event =>  window.open('https://docs.google.com/document/d/1ARud0I6XNcC-zbI-tn2dZObppLNx9yI7zfXiZnCU77Y/edit?usp=sharing')}>Resume</NavLinks>
                    </NavItem>
                </NavMenu>
            
            </NavbarContainer>

        </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
