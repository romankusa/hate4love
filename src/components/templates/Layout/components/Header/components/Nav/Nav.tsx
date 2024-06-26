import { useAppStore } from "@/hooks/useAppStore";

import s from "./Nav.module.scss";
import { Dropdown } from "antd";
import { useLocaleChange } from "@/hooks/useLocaleChange";
import { Locale } from "@/utils/constants";
import { AbstractButton } from "@/components/atoms/AbstractButton/AbstractButton";

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
                <img src={item.icon?.img} alt={item.icon?.alt} />
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
                placement="bottom"
              >
                <button className={s.navItem}>
                  <img src={link.icon?.img} alt={link.icon?.alt} />
                  {link.title}
                </button>
              </Dropdown>
            </li>
          );
        }

        return (
          <li key={link.title} className={s.navItem}>
            <AbstractButton href={link.link}>
              {link.title}
            </AbstractButton>
          </li>
        );
      })}
    </ul>
  );
};
