import styled from 'styled-components';
// import { Link } from 'react-router-dom';

export const LinksContainer = styled.footer`
  background-color: #f9f9f9;
`;

export const LinksWrap = styled.div`
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 20px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
  
`;

export const SocialIconLink = styled.a`
  color: red;
  font-size: 40px;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;