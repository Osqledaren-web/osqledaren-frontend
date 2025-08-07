import React, { FunctionComponent } from 'react';
import ad from '../images/Ad-Logo-Test.png'; //Osqledaren_logga_svart.png
import styled from '../styles/styled';
import { Link } from 'gatsby';

const Header: FunctionComponent = () => {
  return (
    <HeaderWrapper>
      <a href="https://osqledaren.se/advertise">
        <AdImage src={ad} />
      </a>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1vh 0;

  /* VW Heights below set fix a flickering issue in Safari by making HeaderWrappers height static. 
  Calculated like this: height = % width of HeaderImage / 3.3 (The ratio of the sides of the logo)*/
  height: 15vw; //10.6
  @media (max-width: ${({ theme }) => theme.breakpoints.xl + 'px'}) {
    height: 20vw; //15.15vw
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm + 'px'}) {
    height: 52vw; //25.75vw;
  }
`;

const AdImage = styled.img`
  width: 60vw; //35
  padding-bottom: 2vh;
  @media (max-width: ${({ theme }) => theme.breakpoints.xl + 'px'}) {
    width: 85vw; //50
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm + 'px'}) {
    width: 95vw; //85
  }
`;

export default Header;
