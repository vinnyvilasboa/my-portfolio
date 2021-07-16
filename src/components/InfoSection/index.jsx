import React, {useState} from 'react'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, ImgWrap, Img } from './InfoElements';
import {Button} from '../ButtonElement'
import {Link} from 'react-router-dom'
import PowerList from '../PowerList';
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
    id,link}) => {

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
                                {/* <PowerList/> */}
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                
                                {/* <Button><a href='facebook.com'
                                >Check it out</a></Button> */}
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
