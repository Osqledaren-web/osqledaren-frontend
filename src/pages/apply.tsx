import React, { FunctionComponent } from "react";
import styled from "../styles/styled";
import logo from "../images/logo-black.png";
import OLstructure1 from "../images/OLStructure1.svg";
import OLstructure2 from "../images/OLStructure2.svg";
import Helmet from "react-helmet";
import P from "../atoms/P";
import ExternalLink from "../atoms/Link";
import Layout from "../organisms/Layout";

const Apply: FunctionComponent = () => {
  if (typeof window !== `undefined`) {
    window.location.href = "https://forms.gle/Z3bS1f6prRzhqq4R6";
  }

  return (
    <Layout>
      <RedirectMessageWrapper>
        <P>Redirecting...</P>
      </RedirectMessageWrapper>
    </Layout>
  );
};

export default Apply;

const RedirectMessageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 5%;
  margin: 20px 0;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.breakpoints.xl + 350 + "px"}) {
    flex-direction: column;
  }
`;
