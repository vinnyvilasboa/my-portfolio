import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElements'
const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about"  onClick={toggle}>
                    About
                    </SidebarLink>
                    <SidebarLink to="work" onClick={toggle}>
                    Work
                    </SidebarLink>
                    <SidebarLink to="resume" onClick={toggle}>
                    Resume
                    </SidebarLink>
                    <SidebarLink to="connect" onClick={toggle}>
                    Connect
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
