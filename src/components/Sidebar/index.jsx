
import React, { useState, useEffect } from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElements'
import { animateScroll as scroll } from 'react-scroll';

const Sidebar = ({isOpen, toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
          setScrollNav(true);
        } else {
          setScrollNav(false);
        }
      };
    
      useEffect(() => {
        window.addEventListener('scroll', changeNav);
      }, []);
    
    return (
        
        <SidebarContainer scrollNav={scrollNav} isOpen={isOpen} onClick={toggle}  >
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper >
                <SidebarMenu >
                    <SidebarLink to='about' onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                    About
                    </SidebarLink>
                    <SidebarLink to="services" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                    Skills
                    </SidebarLink>
                    <SidebarLink to="work1" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>Projects
                    </SidebarLink>
                    <SidebarLink onClick={event =>  window.open('https://docs.google.com/document/d/1ARud0I6XNcC-zbI-tn2dZObppLNx9yI7zfXiZnCU77Y/edit?usp=sharing')}>Resume
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
        
    )
}

export default Sidebar
