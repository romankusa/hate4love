import { useAppStore } from "@/hooks/useAppStore";
import s from "./MobileNav.module.scss";
import Link from "next/link";
import { HamburguerIcon } from "../HamburguerIcon/HamburguerIcon";
import { Drawer } from "antd";
import { useState } from "react";
import { Button } from "@/components/atoms/Button/Button";
import { CrossIcon } from "@/components/atoms/Icon";

export const MobileNav = () => {
  const { data } = useAppStore.getState();
  const [open, setOpen] = useState(false);

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
            {data.layout.header.links.map((link) => (
              <li
                key={link.title}
                className={s.navItem}
                onClick={() => setOpen(false)}
              >
                <Link href={link.link}>{link.title}</Link>
              </li>
            ))}
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
