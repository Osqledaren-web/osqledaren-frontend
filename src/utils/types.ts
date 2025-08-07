import { FluidObject } from 'gatsby-image';

export interface Color {
  hex: string;
}

export interface Category {
  title: string;
  description?: string;
  color: Color;
  slug: Slug;
  order: number;
  menu: boolean;
}

export interface SanityImageFluid {
  asset: {
    fluid: FluidObject;
  };
}

export type SanityRawContent = unknown;

export interface Slug {
  current: string;
}

export interface Creator {
  name: string;
  id: string;
  mail: string;
  profilePicture: SanityImageFluid;
}

export interface Role {
  name: string;
}

export interface Contribution {
  creator: Creator;
  role: Role;
}

// export interface Episode {
//   name: string;
//   id: string;
// }

export interface Article {
  slug: Slug;
  mainImage: SanityImageFluid;
  creators: [Contribution];
  title: string;
  id: string;
  category: Category;
  ingress: string;
  publishDate: string;
  _rawContent: SanityRawContent;
}
