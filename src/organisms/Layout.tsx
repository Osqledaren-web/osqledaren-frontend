import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import Header from "../molecules/header";
import Footer from "../molecules/footer";
import Filterbar from "../molecules/FilterBar";
import theme from "../styles/theme";

const Layout: FunctionComponent = ({ children }) => (
  <LayoutWrapper>
    <Filterbar />
    {/*
    <Lilwrapper>
      <iframe
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fosqledaren%2Fposts%2Fpfbid02D68MPPbPBzmgWCdiPERDKHoDhcSP1ENLZeu5bT4Rju1tX9eDFB5BzR9thBmgrKrkl&show_text=true&width=500"
        height="100%"
        width="100%"
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </Lilwrapper> 
    */}
    <Content>{children}</Content>
    <Footer />
  </LayoutWrapper>
);

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  background-color: ${theme.colors.background};
`;

const Lilwrapper = styled.div`
  width: 65vw;
  height: 50vh;
  padding: 5vh;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm + "px"}) {
    width: 100vw;
  }
`;

const Content = styled.div`
  flex-grow: 1;
`;

export default Layout;
