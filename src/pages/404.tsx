import React, { FC } from "react";
import Layout from "../organisms/Layout";
import H from "../atoms/H";
import styled from "../styles/styled";
import ContentWrapper from "../molecules/ContentWrapper";
import Helmet from "react-helmet";

const PageNotFound: FC = () => (
  <Layout>
    <Helmet>
      <title>404 - Osqledaren</title>
    </Helmet>
    <ContentWrapper>
      <NotFoundWrapper>
        <H variant="3">Hm... Sidan du letar efter verkar inte finnas.</H>
        <H variant="3">(The page you are looking for does not seem to exist)</H>
      </NotFoundWrapper>
    </ContentWrapper>
  </Layout>
);

export default PageNotFound;

const NotFoundWrapper = styled.div`
  padding: 20px;
  background-color: white;
  border-radius: 20px;
`;
