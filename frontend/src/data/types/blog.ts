type Author = {
  name: string;
  image: string;
  designation: string;
};

// export type Blog = {
//   id: number;
//   title: string;
//   paragraph: string;
//   image: string;
//   author: Author;
//   tags: string[];
//   publishDate: string;
// };

export interface Blog {
  id: number;
  slug: string;   // ✅ add this
  title: string;

  seo: {
    metaTitle: string;
    metaDescription: string;
    focusKeyword: string;
  };

  featuredImage: string;
  publishDate: string;
  lastUpdated: string;
  readingTime: string;

  author: {
    name: string;
    image: string;
    designation: string;
  };

  intro: string;

  sections: {
    heading: string;
    content?: string;
    bulletPoints?: string[];
  }[];

  conclusion: string;
  impParagraph:string;
  
  cta: {
    text: string;
    link: string;
  };

  secondaryCta?: {
    text: string;
    link: string;
  };

  internalLinks?: {
    text: string;
    url: string;
  }[];

  externalLinks?: {
    text: string;
    url: string;
  }[];

  tags: string[];
  views: number;
  comments: number;
  relatedPosts: number[];

  shareLinks: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
  };
}