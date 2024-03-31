import { useAppStore } from "@/hooks/useAppStore";
import Link from "next/link";

import s from "./Nav.module.scss";
import { Dropdown } from "antd";
import { Image } from "@/components/atoms/Image/Image";
import { useLocaleChange } from "@/hooks/useLocaleChange";
import { Locale } from "@/utils/constants";

export const Nav = () => {
  const { data } = useAppStore.getState();
  const { changeLocale } = useLocaleChange();

  const submenuActions = {
    LANG_EN: () => changeLocale(Locale.EN),
    LANG_ES: () => changeLocale(Locale.ES),
  } as any;

  return (
    <ul className="flex items-center gap-10 xl:gap-28">
      {data.layout.header.links.map((link) => {
        if (link.submenu) {
          const items = link.submenu.map((item, idx) => ({
            key: `${idx + 1}`,
            label: (
              <button
                className={s.submenuItem}
                onClick={
                  item.action
                    ? submenuActions[item.action]
                    : undefined
                }
              >
                <Image src={item.icon?.img} alt={item.icon?.alt} />
                {item.title}
              </button>
            ),
          }));

          return (
            <li key={link.title}>
              <Dropdown
                rootClassName={s.dropdown}
                menu={{ items }}
                trigger={["click"]}
                placement="bottomCenter"
              >
                <button className={s.navItem}>
                  <Image src={link.icon?.img} alt={link.icon?.alt} />
                  {link.title}
                </button>
              </Dropdown>
            </li>
          );
        }

        return (
          <li key={link.title} className={s.navItem}>
            <Link href={link.link}>{link.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};
