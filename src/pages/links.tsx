import React, { FunctionComponent } from "react";
import styled from "../styles/styled";
import logo from "../images/logo-black.png";
import { graphql, useStaticQuery } from "gatsby";
import Helmet from "react-helmet";
import P from "../atoms/P";
import ExternalLink from "../atoms/Link";

const Links: FunctionComponent = () => {
  const data = useStaticQuery(graphql`
    query Links {
      allSanityLink {
        edges {
          node {
            ...Link
          }
        }
      }
    }
  `);

  const links = data.allSanityLink.edges
    .map(e => e.node)
    .sort((a, b) => (a.order ?? 999) - (b.order ?? 999));

  return (
    <Layout>
      <Helmet>
        <title>Links - Osqledaren</title>
      </Helmet>
      <Header>
        <Logo src={logo}></Logo>
      </Header>
      <LinkListContainer>
        <LinkList>
          {links.map((link, i) => (
            <Link
              href={link.url}
              key={"link-" + i}
              style={{
                backgroundColor: link.color.hex,
                color: link.textColor.hex
              }}
            >
              {link.image ? (
                <LinkImage src={link.image?.asset.fluid.src}></LinkImage>
              ) : (
                ""
              )}
              {link.name}
            </Link>
          ))}
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

export default Links;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  font-family: Avenir, sans-serif;
  overscroll-behavior: none;
  font-size: 2.5vh;
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

const LinkList = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
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

  &:not(:last-child) {
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
