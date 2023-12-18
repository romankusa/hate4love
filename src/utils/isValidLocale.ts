import { Locale } from "./constants";

export const isValidLocale = (locale: any) =>
  Object.values(Locale).includes(locale);
