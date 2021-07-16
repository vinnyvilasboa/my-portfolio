import React from 'react'
import {
    FaLink,
    FaGithub
} from 'react-icons/fa';

import {
LinksContainer,
LinksWrap,
SocialMedia,
SocialMediaWrap,
SocialIcons,
SocialIconLink
}

from './FakeXElements'

const FakeX = () => {
    return (
    <LinksContainer>
    <LinksWrap> 
    <SocialMedia>
                    <SocialMediaWrap>
                        <SocialIcons>
                            <SocialIconLink href='https://github.com/brandonhall96/react-project-3' target='_blank' aria-label='Github'>
                                <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink href='http://fakex-react.herokuapp.com/' target='_blank' aria-label='Link'>
                                <FaLink /> 
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
    
    </LinksWrap>
    </LinksContainer>
    )
}

export default FakeX