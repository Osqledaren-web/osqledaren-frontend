import { graphql, useStaticQuery } from "gatsby";
import React, { FunctionComponent, useMemo, useState } from "react";
import { ReadMoreButton } from "../molecules/ReadMoreButton";
import ContentWrapper from "../molecules/ContentWrapper";
import ContentFeed from "../organisms/ContentFeed";
import Layout from "../organisms/Layout";
import { Article } from "../utils/types";
import Helmet from "react-helmet";

const useContent = () => {
  const [limit, setLimit] = useState(5);

  const { allSanityArticle } = useStaticQuery<{
    allSanityArticle: {
      edges: {
        node: Article;
      }[];
    };
  }>(graphql`
    query {
      allSanityArticle(limit: 100, sort: { fields: publishDate, order: DESC }) {
        edges {
          node {
            ...Article
          }
        }
      }
    }
  `);

  const nextPage = () => setLimit((l) => l + 5);

  const content = useMemo(
    () => allSanityArticle.edges.slice(0, limit),
    [limit, allSanityArticle.edges]
  );

  const hasMore = allSanityArticle.edges.length >= limit;

  return { hasMore, content, nextPage };
};

const Index: FunctionComponent = () => {
  const { content, hasMore, nextPage } = useContent();

  return (
    <Layout>
      <Helmet>
        <title>Osqledaren</title>
      </Helmet>
      <ContentWrapper>
        <ContentFeed content={content} />
        {hasMore && (
          <ReadMoreButton onClick={nextPage}>{"Läs mer"}</ReadMoreButton>
        )}
      </ContentWrapper>
    </Layout>
  );
};
export default Index;
