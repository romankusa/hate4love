export interface CarouselSection {
  carousel: CarouselSlide[];
  id: string;
  type: string;
}

export interface CarouselSlide {
  separator: string;
  text: string;
  highlight: string;
  largeText: string;
  copyright: string;
  background: Background;
}

export interface Background {
  alt: string;
  img: string;
  mobileImg: string;
}
