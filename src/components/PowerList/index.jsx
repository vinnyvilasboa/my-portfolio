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

from './PowerElements'

const PowerList = () => {
    return (
    <LinksContainer>
    <LinksWrap> 
    <SocialMedia>
                    <SocialMediaWrap>
                        <SocialIcons>
                            <SocialIconLink href='https://github.com/vinnyvilasboa/power-list' target='_blank' aria-label='Github'>
                                <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink href='https://powerlist.herokuapp.com/' target='_blank' aria-label='Link'>
                                <FaLink />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
    
    </LinksWrap>
    </LinksContainer>
    )
}

export default PowerList
