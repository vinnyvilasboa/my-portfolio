import React from 'react'
import Video from '../../videos/video.mp4'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP} from './HeroElements';
const HeroSection = () => {
    return (
        <HeroContainer >
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'></VideoBg>
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
