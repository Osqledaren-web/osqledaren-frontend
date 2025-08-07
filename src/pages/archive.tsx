import React, { FunctionComponent } from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import styled from "../styles/styled";
import H from "../atoms/H";
import P from "../atoms/P";
import Img from "gatsby-image";
import Layout from "../organisms/Layout";
import InfoWrapper from "../molecules/InfoWrapper";
import Helmet from "react-helmet";
const Archive: FunctionComponent = () => {
  const data = useStaticQuery(graphql`
    query Archive {
      allSanityMagazine {
        edges {
          node {
            ...Magazine
          }
        }
      }
    }
  `);

  const magazines = data.allSanityMagazine.edges
    .map(e => e.node)
    .sort(
      (a, b) =>
        new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    );

  const magazinesByYear = magazines.reduce((previous, current) => {
    const currentMagazineYear = current.year;
    if (!(currentMagazineYear in previous)) {
      previous[currentMagazineYear] = [];
    }
    previous[currentMagazineYear].push(current);
    return previous;
  }, {});

  const availableYears = Object.keys(magazinesByYear);

  Object.values(magazinesByYear).forEach((yearArr: any) => {
    yearArr.sort(
      (a, b) =>
        new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime()
    );
  });

  return (
    <Layout>
      <Helmet>
        <title>Archive - Osqledaren</title>
      </Helmet>
      <InfoWrapper>
        <AboutContainer>
          <AboutText>
            <H variant="3">Archive</H>
          </AboutText>
          {/* <ImageWrapper>
            <Img fluid={data.staff.childImageSharp.fluid} />
          </ImageWrapper> */}
          {availableYears.map(year => (
            <YearWrapper>
              <span>{year}</span>
              <MagazinesWrapper>
                {magazinesByYear[year]
                  .filter(magazine => magazine.thumbnail?.asset)
                  .map(m => (
                    <a href={m.file?.asset?.url ?? m.link}>
                      <Magazine fluid={m.thumbnail.asset.fluid}></Magazine>
                      {<span>{m.title}</span>}
                      {<span>{m.publishDate}</span>}
                    </a>
                  ))}
              </MagazinesWrapper>
            </YearWrapper>
          ))}
        </AboutContainer>
      </InfoWrapper>
    </Layout>
  );
};
export default Archive;

const YearWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  > span {
    font-weight: bold;
    font-size: 20px;
  }

  &:last-of-type {
    margin-bottom: 40px;
  }
`;

const MagazinesWrapper = styled.div`
  display: grid;

  grid-template-columns: repeat(5, 20%);
  @media (max-width: ${({ theme }) => theme.breakpoints.lg + "px"}) {
    grid-template-columns: repeat(4, 25%);
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md + "px"}) {
    grid-template-columns: repeat(3, 33%);
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm + "px"}) {
    grid-template-columns: repeat(2, 50%);
  }
  > a {
    width: 95%;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: black;
    font-size: 15px;
    margin-top: 20px;
    margin-right: 15px;
    > span {
      margin-top: 5px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;

      &:first-of-type {
        font-weight: bold;
      }
    }
  }
`;

const Magazine = styled(Img)`
  width: 100%;
  transition: box-shadow 0.1s, transform 0.1s;
  &:hover {
    box-shadow: 0 0.25rem 0.75rem 0 #bbbbbb;
    transform: translateY(-4px);
    transition: box-shadow 0.2s, transform 0.2s;
  }
`;

const AboutText = styled.div`
  margin-top: 20px;
  width: 100%;
`;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Avenir;
  width: 100%;
  background-color: white;
  padding: 0 5%;
  margin: 20px 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  @media (max-width: ${({ theme }) => theme.breakpoints.xl + 350 + "px"}) {
    flex-direction: column;
  }
`;
