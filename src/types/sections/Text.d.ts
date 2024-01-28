export interface TextSection {
  id: string;
  type: string;
  title: Title;
  body: string;
  image: Image;
  buttons: Button[];
}

export interface Title {
  text: string;
  icon: Icon;
  highlight?: string;
}

export interface Icon {
  img: string;
  alt: string;
}

export interface Image {
  img: string;
  alt: string;
}

export interface Button {
  title: string;
  secondary: boolean;
  link: string;
  icon: Icon2;
}

export interface Icon2 {
  img: string;
  alt: string;
}
