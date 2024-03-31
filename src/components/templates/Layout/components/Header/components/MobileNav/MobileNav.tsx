import { useAppStore } from "@/hooks/useAppStore";
import s from "./MobileNav.module.scss";
import { HamburguerIcon } from "../HamburguerIcon/HamburguerIcon";
import { Drawer, Dropdown } from "antd";
import { useState } from "react";
import { Button } from "@/components/atoms/Button/Button";
import { CrossIcon } from "@/components/atoms/Icon";
import { Image } from "@/components/atoms/Image/Image";
import { AbstractButton } from "@/components/atoms/AbstractButton/AbstractButton";

export const MobileNav = () => {
  const { data } = useAppStore.getState();
  const [open, setOpen] = useState(false);

  const submenuActions = {
    LANG_EN: () => {},
    LANG_ES: () => {},
  } as any;

  return (
    <>
      {open ? (
        <button className={s.crossBtn} onClick={() => setOpen(false)}>
          <CrossIcon />
        </button>
      ) : (
        <HamburguerIcon onClick={() => setOpen(true)} />
      )}
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        placement="top"
        rootClassName={s.drawer}
        closeIcon={false}
        rootStyle={{
          marginTop: open ? "10rem" : undefined,
        }}
      >
        <nav className={s.mobileNav}>
          <ul className={s.inner}>
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
                      <Image
                        src={item.icon?.img}
                        alt={item.icon?.alt}
                      />
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
                    >
                      <button className={s.navItem}>
                        <Image
                          src={link.icon?.img}
                          alt={link.icon?.alt}
                        />
                        {link.title}
                      </button>
                    </Dropdown>
                  </li>
                );
              }
              return (
                <li
                  key={link.title}
                  className={s.navItem}
                  onClick={() => setOpen(false)}
                >
                  <AbstractButton href={link.link}>
                    {link.title}
                  </AbstractButton>
                </li>
              );
            })}
            <li>
              <Button href={data.layout.header.button.link}>
                <img
                  src={data.layout.header.button.icon?.img}
                  alt={data.layout.header.button.icon?.alt}
                />
                {data.layout.header.button.title}
              </Button>
            </li>
          </ul>
          <p className={s.copyright}>
            {data.layout.footer.copyright}
          </p>
        </nav>
      </Drawer>
    </>
  );
};
