export interface PartnersSection {
  title: Title;
  id: string;
  type: string;
  partners: Partner[];
}

export interface Title {
  text: string;
}

export interface Partner {
  img: string;
  alt: string;
}
