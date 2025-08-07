import React, { FunctionComponent } from "react";
import { Link } from "gatsby";
import Layout from "../organisms/Layout";
import InfoWrapper from "../molecules/InfoWrapper";
import styled from "../styles/styled";
import H from "../atoms/H";
import P from "../atoms/P";
import Helmet from "react-helmet";

const Live: FunctionComponent = () => {
  return (
    <Layout>
      <Helmet>
        <title>Live - Osqledaren</title>
      </Helmet>
      <InfoWrapper>
        <LiveContainer>
          <LiveText>
            <H variant="3">OL is live at KF-04!</H>
            <P>
              Follow our live reporting below. You can find all documents for
              KF-04&nbsp;
              <a href="https://drive.google.com/drive/folders/1CSdqR8gKbDTGtGcLkS2iOpQQ12Mw6cyD">
                here.
              </a>
              <br />
            </P>
          </LiveText>
          <LiveReporting>
            <iframe
              name="lb24"
              frameborder="0"
              height="100%"
              loading="lazy"
              width="100%"
              class="lb24-iframe"
              scrolling="auto"
              src="//v.24liveblog.com/iframe/?id=3260367258858776128"
            ></iframe>
            <script src="https://v.24liveblog.com/iframe.js"></script>
          </LiveReporting>
        </LiveContainer>
      </InfoWrapper>
    </Layout>
  );
};
export default Live;

const LiveText = styled.div`
  margin-top: 20px;
  max-width: 800px;
`;

const LiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  padding: 0 5%;
  margin: 20px 0;
  justify-content: space-between;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const LiveReporting = styled.div`
  border: 1px solid lightgrey;
  height: 1000px;
  margin-bottom: 50px;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm + "px"}) {
    width: 115vw;
    transform-origin: left top;
    scale: 0.8;
  }
`;
