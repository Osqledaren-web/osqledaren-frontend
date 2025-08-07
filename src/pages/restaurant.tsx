import React, { FunctionComponent } from "react";
import styled from "../styles/styled";
import Layout from "../organisms/Layout";
import P from "../atoms/P";

const Restaurant: FunctionComponent = () => {
  if (typeof window !== `undefined`) {
    window.location.href = "https://forms.gle/CVCg9crR5JAa6fNg7";
  }

  return (
    <Layout>
      <RedirectMessageWrapper>
        <P>Redirecting...</P>
      </RedirectMessageWrapper>
    </Layout>
  );
};

export default Restaurant;

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
