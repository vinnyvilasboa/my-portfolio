import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection';
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive, homeObjSeven} from '../components/InfoSection/Data.jsx'
import Services from '../components/Services '
import Footer from '../components/Footer'
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
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjThree}/>
            <InfoSection {...homeObjFour}/>
            <InfoSection {...homeObjFive}/>
            
        </>
    )
}

export default Home
