import React, { FunctionComponent } from "react";
import { Link } from "gatsby";
import Layout from "../organisms/Layout";
import InfoWrapper from "../molecules/InfoWrapper";
import styled from "../styles/styled";
import H from "../atoms/H";
import P from "../atoms/P";
import Helmet from "react-helmet";

const Subscribe: FunctionComponent = () => {
  return (
    <Layout>
      <Helmet>
        <title>Tipsa oss - Osqledaren</title>
      </Helmet>
      <InfoWrapper>
        <TipsContainer>
          <TipsText>
            <H variant="3">Skicka in tips till Osqledaren!</H>
            <P>
              Det går utmärkt att kontakta oss på osqledaren@ths.kth.se om du har ett tips rörande något vi skulle kunna skriva
              om i tidningen.
            </P>
            <H variant="4">Insändare</H>
            <P>
              Vill du istället skriva en insändare till tidningen? Följ
              instruktionerna{" "}
              <a
                href="https://docs.google.com/document/d/1bIo8LqcSZzrZMCEG1R0_nQvBQuTCY5o9LpmodeoE8PI/"
                target="_blank"
                rel="noreferrer"
              >
                här
              </a>
              . English instructions are available further down in the same
              document.
            </P>
          </TipsText>
        </TipsContainer>
      </InfoWrapper>
    </Layout>
  );
};
export default Subscribe;

const TipsText = styled.div`
  margin-top: 20px;
  max-width: 800px;
`;

const TipsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  background-color: white;
  padding: 0 5%;
  margin: 20px 0;
  justify-content: space-between;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  @media (max-width: ${({ theme }) => theme.breakpoints.xl + 350 + "px"}) {
    flex-direction: column;
  }
`;
