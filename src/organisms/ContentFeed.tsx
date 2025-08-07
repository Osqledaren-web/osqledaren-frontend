import React, { FC } from 'react';
import { Article } from '../utils/types';
import ArticleCard from '../molecules/ArticleCard';
import { getArticleSlug } from '../utils/slug';

interface Props {
  content: Array<{
    node: Article;
  }>;
}

const ContentFeed: FC<Props> = ({ content }) => {
  return (
    <>
      {content.map(({ node }, i) => (
        <ArticleCard
          expand={i % 6 < 3}
          reverse={i % 2 === 1}
          to={
            node.slug.current === 'about' ||
            node.slug.current === 'advertise' ||
            node.slug.current === 'insandare' ||
            node.slug.current === 'podcast'
              ? '/' + node.slug.current
              : getArticleSlug(node.category.slug.current, node.slug.current)
          }
          key={node.id}
          article={node}
        />
      ))}
    </>
  );
};

export default ContentFeed;
