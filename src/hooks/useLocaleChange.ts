import { Locale } from "@/utils/constants";
import { usePathname, useRouter } from "next/navigation";

function getPathWithoutLanguage(url: string) {
  const locales = Object.values(Locale);

  // Split the URL by slashes
  const parts = url.split("/");

  // Remove the language part if it exists
  if (parts.length > 1 && locales.includes(parts[1] as any)) {
    parts.splice(1, 1);
  }

  // Reconstruct the URL
  return parts.join("/");
}

export const useLocaleChange = () => {
  const { push } = useRouter();
  const pathname = usePathname();

  const changeLocale = (locale: Locale) => {
    const path = getPathWithoutLanguage(pathname);
    window.location.assign(`/${locale}/${path}`);
  };

  return { changeLocale };
};
