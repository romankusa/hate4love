export interface Mision {
  slug: string;
  hero: Hero;
  metadata: Metadata;
  content: Content;
}

export interface Hero {
  background: Background;
  title: string;
  highlight: string;
}

export interface Background {
  img: string;
  mobileImg: string;
  alt: string;
}

export interface Metadata {
  title: string;
  description: string;
}

export interface Content {
  title: string;
  body: string;
  buttons: Button[];
}

export interface Button {
  title: string;
  link: string;
  icon: Icon;
  secondary?: boolean;
}

export interface Icon {
  img: string;
  alt: string;
}
