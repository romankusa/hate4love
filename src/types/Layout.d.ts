export interface Layout {
  slug: string;
  header: Header;
  footer: Footer;
}

export interface Header {
  links: Link[];
  button: Button;
  logo: Logo;
}

export interface Link {
  title: string;
  link: string;
}

export interface Button {
  title: string;
  link: string;
}

export interface Logo {
  img: string;
  alt: string;
}

export interface Footer {
  copyright: string;
}
