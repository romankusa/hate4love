export interface Home {
  slug: string;
  sections: Section[];
  metadata: Metadata;
  hero: Hero;
}

export interface Section {
  id: string;
  type: string;
  numbers: Number[];
}

export interface Number {
  Number: number;
  text: string;
}

export interface Metadata {
  title: string;
  description: string;
}

export interface Hero {
  text: string;
  highlight: string;
  background: { mobileImg: string } & Background;
}

export interface Background {
  img: string;
  alt: string;
}
