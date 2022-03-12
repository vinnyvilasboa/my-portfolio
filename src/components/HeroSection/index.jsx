import React from 'react'
import {HeroContainer, HeroBg, HeroContent, HeroH1, HeroP} from './HeroElements';
// import {VideoBg} from './HeroElements';

const HeroSection = () => {
    return (
        <HeroContainer >
            <HeroBg>
                {/* <VideoBg src={Background} ></VideoBg> */}
            </HeroBg>
            <HeroContent> 
                <HeroH1> 
                    Hi, I'm Vinny. A Full Stack Developer based out of NYC.
                </HeroH1>
                <HeroP> 
                    
                </HeroP>
            </HeroContent>

        </HeroContainer>
    )
}

export default HeroSection
