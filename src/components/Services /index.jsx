import React from 'react'
import Icon1 from '../../images/language.svg'
import Icon2 from '../../images/framework.svg'
import Icon3 from '../../images/data.svg'
import { ServicesContainer, ServicesH1, ServicesWrapper,ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'
const Services = () => {
    return (
        <ServicesContainer id="services">
        <ServicesH1>My skills</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Programming Languages</ServicesH2>
                    <ServicesP> •JavaScript
                          •Python •HTML5  •CSS3  </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>FrameWorks</ServicesH2>
                    <ServicesP> 
                        •React
                        •Node
                        •Express
                        •Mongoose
                        •NextJS
                     </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Databases</ServicesH2>
                    <ServicesP>
                        •MongoDB
                        •Atlas
                        •SQL
                        •Sequelize
                        •PostgreSQL </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
 
    )
}

export default Services
