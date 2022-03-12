import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection';
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive} from '../components/InfoSection/Data.jsx'
import Services from '../components/Services '
import Footer from '../components/Footer'
import FakeFlix from '../components/FakeFlix'
import PowerList from '../components/PowerList'
import FakeX from '../components/FakeX'
import WNRS from '../components/WNRS'

// import sitting from '../images/sitting.svg'



const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <Footer />
            <InfoSection {...homeObjOne} />
            <Services />
            <FakeFlix />
            <InfoSection {...homeObjFive}/>
            <FakeX />
            <InfoSection {...homeObjTwo}/>
            <PowerList />
            <InfoSection {...homeObjFour}/>
            <WNRS />
            <InfoSection {...homeObjThree}/>
            
            
        </>
    )
}

export default Home
