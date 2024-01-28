import HomeEn from "@/../content/home/en/main.json";
import HomeEs from "@/../content/home/es/main.json";

import LayoutEn from "@/../content/layout/en/main.json";
import LayoutEs from "@/../content/layout/es/main.json";

import MisionEs from "@/../content/mision/es/main.json";
import MisionEn from "@/../content/mision/en/main.json";

import { Locale } from "./constants";
import { isValidLocale } from "./isValidLocale";

const localesMap = {
  [Locale.EN]: {
    layout: LayoutEn,
    home: HomeEn,
    mision: MisionEn,
  },
  [Locale.ES]: {
    layout: LayoutEs,
    home: HomeEs,
    mision: MisionEs,
  },
};

export const getContent = (locale: Locale): any => {
  if (!isValidLocale(locale)) return {};

  return localesMap[locale];
};
