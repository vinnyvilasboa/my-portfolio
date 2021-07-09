//stock components
import styled from 'styled-components'
//All nav elements will live here such as nav
import {Link as LinkRouter} from 'react-router-dom'
import {Link as LinkScroll} from 'react-router-dom'

// import {Link} from 'react-scroll'



export const Nav = styled.nav`
    background: #000;
    height: 80px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`
    

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 200px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
    `


    //the below is going to be a link so you need to set a path for it when setting it in index
export const NavLogo = styled(LinkRouter)`
    color: #fff;
    justify-self: flex;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    font-family: Monaco;


`

//this is component is only going to serve a purpose if the size is smaller than 768px
/*
display none then media screen with conditional if it meets the requirements

*/
export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: white;
}
`
//if its less than 768px don't display
export const NavMenu = styled.ul`
    display: flex;  
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    
    }
`

export const NavItem = styled.li`
    height: 80px;
    font-family: monaco;
`

//compared to the link that moves from page to page -- this one is just scroll version
export const NavLinks = styled(LinkScroll)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #01bf71;
    }

`