export interface HateForLoveSection {
  id: string;
  type: string;
  flipImages: FlipImage[];
  title: Title;
}

export interface FlipImage {
  front: Front;
  back: Back;
}

export interface Front {
  img: string;
  mobileImg?: string;
  alt: string;
}

export interface Back {
  img: string;
  mobileImg?: string;
  alt: string;
}

export interface Title {
  text: string;
  icon: Icon;
}

export interface Icon {
  img: string;
}
