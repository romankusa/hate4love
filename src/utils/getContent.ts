import HomeEn from "@/../content/en/home/home.json";
import HomeEs from "@/../content/es/home/home.json";

import LayoutEn from "@/../content/en/layout/layout.json";
import LayoutEs from "@/../content/es/layout/layout.json";

import { Locale } from "./constants";
import { isValidLocale } from "./isValidLocale";

const localesMap = {
  [Locale.EN]: {
    layout: LayoutEn,
    home: HomeEn,
  },
  [Locale.ES]: {
    layout: LayoutEs,
    home: HomeEs,
  },
};

export const getContent = (locale: Locale): any => {
  if (!isValidLocale(locale)) return {};

  return localesMap[locale];
};