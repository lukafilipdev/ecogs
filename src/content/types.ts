import type { StaticImageData } from "next/image";

export type ImageSource = StaticImageData;

export type NewsCategory =
  "Bogoslužje" | "Dogodki" | "Mladina" | "Skupnost" | "Obvestila";

export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string; cite: string }
  | { type: "image"; image: ImageSource; caption: string }
  | { type: "gallery"; images: ImageSource[]; caption: string };

/** CMS-ready article model. */
export interface Article {
  slug: string;
  title: string;
  /** ISO date, YYYY-MM-DD */
  date: string;
  category: NewsCategory;
  image: ImageSource;
  excerpt: string;
  published: boolean;
  body?: ArticleBlock[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface OfficeHour {
  day: string;
  time: string;
}

export interface CommunityActivity {
  title: string;
  image: ImageSource;
  text: string;
}

export interface Milestone {
  year: string;
  title: string;
  text: string;
}

export interface HistoryChapter {
  year: string;
  kicker: string;
  title: string;
  text: string;
  figure?: {
    image: ImageSource;
    /** CSS aspect-ratio, e.g. "3/2" */
    ratio: string;
    caption: string;
  };
}

export interface CoreValue {
  word: string;
  text: string;
}

export interface GalleryImage {
  image: ImageSource;
  alt: string;
}
