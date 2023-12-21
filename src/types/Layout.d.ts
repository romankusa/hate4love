export interface Layout {
  slug: string;
  header: Header;
  footer: Footer;
}

export interface Header {
  logo: string;
  links: Link[];
  button: Button;
}

export interface Link {
  title: string;
  link: string;
}

export interface Button {
  title: string;
  link: string;
}

export interface Footer {
  logo: string;
  copyright: string;
}
