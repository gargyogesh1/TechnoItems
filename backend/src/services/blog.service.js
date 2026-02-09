import { geminiModel } from "../config/gemini.js";
import { getUnsplashImage } from "../config/unsplash.js";

export const generateBlog = async (category) => {
  const prompt = `You are a backend content generator.

Generate a BLOG POST in PURE JSON format.
DO NOT include explanations, markdown, comments, or extra text.
Return ONLY valid JSON.

The JSON MUST follow this EXACT STRUCTURE and ALL fields must be present:

{
  "id": number,
  "slug": string,
  "title": string,

  "seo": {
    "metaTitle": string,
    "metaDescription": string,
    "focusKeyword": string
  },

  "featuredImage": string,
  "publishDate": string,
  "lastUpdated": string,
  "readingTime": string,

  "author": {
    "name": string,
    "imageLink": string,
    "designation": string
  },

  "intro": string,

  "sections": [
    {
      "heading": string,
      "content": string,
      "bulletPoints": [string]
    }
  ],

  "conclusion": string,
  "impParagraph": string,

  "cta": {
    "text": string,
    "link": string
  },

  "secondaryCta": {
    "text": string,
    "link": string
  },

  "internalLinks": [
    {
      "text": string,
      "url": string
    }
  ],

  "externalLinks": [
    {
      "text": string,
      "url": string
    }
  ],

  "tags": [string],
  "views": number,
  "comments": number,

  "relatedPosts": [number],

  "shareLinks": {
    "facebook": string,
    "twitter": string,
    "linkedin": string
  }
}

Rules:
- id must be a number
- slug must be URL‑friendly lowercase with hyphens
- readingTime must be like "7 min read"
- publishDate and lastUpdated must be human‑readable (e.g. "12 Jan 2024")
- bulletPoints must be included when appropriate, otherwise use an empty array []
- Use realistic SEO‑optimized content
- Author should be relevant to the topic
- Do NOT use placeholder text like "lorem ipsum"

Category:
"${category}"`;

  const result = await geminiModel.generateContent(prompt);
  const blog = JSON.parse(result.response.text());

  blog.featuredImage = await getUnsplashImage(category);
  blog.authorImage = await getUnsplashImage("author portrait");
  blog.publishDate = new Date().toDateString();
  blog.lastUpdated = blog.publishDate;

  return blog;
};