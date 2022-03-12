import React from 'react';
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaGithub

} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink
} from './FooterElements';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                        </SocialLogo>
                        <SocialIcons>
                            <SocialIconLink href='https://github.com/vinnyvilasboa' target='_blank' aria-label='Github'>
                                <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink href='https://www.facebook.com/vinnyvilasboa' target='_blank' aria-label='Facebook'>
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='https://www.instagram.com/vinnytraining/' target='_blank' aria-label='Instagram'>
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href='https://www.linkedin.com/in/vinny-vilasboa-597715192/' target='_blank' aria-label='Linkedin'>
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;
