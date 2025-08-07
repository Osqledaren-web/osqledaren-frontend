import { graphql } from "gatsby";

export const articleFragment = graphql`
  fragment Article on SanityArticle {
    title
    id
    creators {
      creator {
        name
        id
        mail
        profilePicture {
          asset {
            fluid(maxWidth: 960) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      role {
        name
      }
    }
    mainImage {
      asset {
        fluid(maxWidth: 960) {
          ...GatsbySanityImageFluid
        }
      }
    }
    publishDate
    ingress
    category {
      ...Category
    }
    slug {
      current
    }
    _rawContent
  }
`;

export const categoryFragment = graphql`
  fragment Category on SanityCategory {
    title
    description
    slug {
      current
    }
    color {
      hex
    }
    menu
    order
  }
`;

export const creatorFragment = graphql`
  fragment Creator on SanityCreator {
    name
    mail
    profilePicture {
      asset {
        fluid(maxWidth: 1000) {
          ...GatsbySanityImageFluid
        }
      }
    }
  }
`;

export const linkFragment = graphql`
  fragment Link on SanityLink {
    name
    url
    color {
      hex
    }
    textColor {
      hex
    }
    order
    image {
      asset {
        fluid(maxWidth: 1000) {
          ...GatsbySanityImageFluid
        }
      }
    }
  }
`;

export const magazineFragment = graphql`
  fragment Magazine on SanityMagazine {
    publishDate
    title
    year
    link
    currentYear
    file {
      asset {
        url
        size
      }
    }
    thumbnail {
      asset {
        fluid(maxWidth: 1000) {
          ...GatsbySanityImageFluid
        }
      }
    }
  }
`;
// export const episodeFragment = graphql`
//   fragment Episode on PodcastEpisode {
//     title
//     id
//   }
// `;
