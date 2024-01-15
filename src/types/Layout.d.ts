export interface Layout {
  slug: string;
  header: Header;
  footer: Footer;
}

export interface Header {
  links: Link[];
  button: Button;
  logo: { mobileImg: string } & Image;
}

export interface Link {
  title: string;
  link: string;
}

export interface Button {
  title: string;
  link: string;
  icon: Image;
}

export interface Image {
  img: string;
  alt: string;
}

export interface Footer {
  copyright: string;
}
