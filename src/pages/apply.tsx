import React, { FunctionComponent } from "react";
import styled from "../styles/styled";
import logo from "../images/logo-black.png";
import OLstructure1 from "../images/OLStructure1.svg";
import OLstructure2 from "../images/OLStructure2.svg";
import Helmet from "react-helmet";
import P from "../atoms/P";
import ExternalLink from "../atoms/Link";

const Apply: FunctionComponent = () => {
  return (
    <Layout>
      <Helmet>
        <title>Apply - Osqledaren</title>
      </Helmet>

      <Header>
        <Logo src={logo}></Logo>
      </Header>

      <LinkListContainer>
        <StructureLink
          href="https://forms.gle/kr1G7sN2JPRAZsqMA"
          target="_blank"
        >
          <OLStructure src={OLstructure1}></OLStructure>
        </StructureLink>

        <LinkList>
          <Link
            href="https://forms.gle/kr1G7sN2JPRAZsqMA"
            target="_blank"
            rel="noreferrer"
            style={{
              backgroundColor: "#f5c832",
              color: "black"
            }}
          >
            Apply for Osqledingen (Project&nbsp;Group)
          </Link>
        </LinkList>
        <StructureLink
          href="https://forms.gle/GD3wncsaTAcwsN5u8"
          target="_blank"
        >
          <OLStructure src={OLstructure2}></OLStructure>
        </StructureLink>
        <LinkList>
          <Link
            href="https://forms.gle/GD3wncsaTAcwsN5u8"
            target="_blank"
            rel="noreferrer"
            style={{
              backgroundColor: "#f5c832",
              color: "black"
            }}
          >
            Apply for the Redaqtion (other&nbsp;positions)
          </Link>
        </LinkList>
      </LinkListContainer>

      <Footer>
        <P size="5pt" color="white">
          © 2008 - {new Date().getFullYear()} Osqledaren.
        </P>
      </Footer>
    </Layout>
  );
};

export default Apply;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  font-family: Avenir, sans-serif;
  overscroll-behavior: none;
  font-size: calc(15px + 0.7vh);
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  height: 12vh;
  box-shadow: -6px 0 white, 6px 0 white, 0 0px 20px grey;
`;

const LinkListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  flex-grow: 1;
  overflow-y: auto;
`;

const OLStructure = styled.img`
  width: 100%;
`;

const StructureLink = styled.a`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 80%;
`;

const LinkList = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 80%;
`;

const LinkImage = styled.img`
  position: absolute;
  top: 15px;
  left: 15px;
  height: 40px;
`;

const Link = styled.a`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: rgb(220, 112, 45);
  color: inherit;
  text-decoration: inherit;
  height: 70px;
  font-weight: bold;
  border-radius: 10px;
  text-align: center;
  padding-left: 5%;
  padding-right: 5%;

  :last-child {
    margin-bottom: 10px;
  }
  &:hover {
    transform: scale(1.02);
    transition: transform 0.3s;
  }
`;

const Logo = styled.img`
  height: 10vh;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-shrink: 0;
  height: 50px;
  background-color: black;
  box-sizing: border-box;
  font-size: 2vh;
`;
