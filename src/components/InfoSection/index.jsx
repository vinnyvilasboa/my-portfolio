import React, {useState} from 'react'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, ImgWrap, Img } from './InfoElements';
import {Button} from '../ButtonElement'
// import about from '../../images/svg-4.svg'

const InfoSection = ({ lightBg,
    imgStart,
    topLine,
    lightText,
    darkText,
    headline,
    description,
    img,
    alt,
    id }) => {

        const [hover, setHover] = useState(false);

        const onHover = () => {
          setHover(!hover);
        }
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                {/* <Button
                                    to='signup'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                    primary='true'
                                    dark='true'
                                    onMouseEnter={onHover}
                                    onMouseLeave={onHover}
                                >Check it out</Button> */}
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection;
