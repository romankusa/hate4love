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
  number: number;
  text: string;
}

export interface Metadata {
  title: string;
  description: string;
}

export interface Hero {
  title: string;
  text: string;
  background: { mobileImg: string } & Image;
  logo: Image;
}

export interface Image {
  img: string;
  alt: string;
}
