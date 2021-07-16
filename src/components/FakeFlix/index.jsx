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

from './FlixElements'

const FakeFlix = () => {
    return (
    <LinksContainer>
    <LinksWrap> 
    <SocialMedia>
                    <SocialMediaWrap>
                        <SocialIcons>
                            <SocialIconLink href='https://github.com/brandonhall96/fakeflix' target='_blank' aria-label='Github'>
                                <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink href='https://young-basin-22033.herokuapp.com/' target='_blank' aria-label='Link'>
                                <FaLink /> 
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
    
    </LinksWrap>
    </LinksContainer>
    )
}

export default FakeFlix
