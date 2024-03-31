import { Locale } from "@/utils/constants";
import { usePathname, useRouter } from "next/navigation";

export const useLocaleChange = () => {
  const { push } = useRouter();
  const pathname = usePathname();

  const changeLocale = (locale: Locale) => {
    console.log({ locale, pathname });
  };

  return { changeLocale };
};
