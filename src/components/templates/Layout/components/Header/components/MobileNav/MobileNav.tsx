import { useAppStore } from "@/hooks/useAppStore";
import s from "./MobileNav.module.scss";
import Link from "next/link";
import { HamburguerIcon } from "../HamburguerIcon/HamburguerIcon";
import { Drawer } from "antd";
import { useState } from "react";

export const MobileNav = () => {
  const { data } = useAppStore.getState();
  const [open, setOpen] = useState(false);

  return (
    <>
      <HamburguerIcon onClick={() => setOpen(true)} />
      <Drawer open={open} onClose={() => setOpen(false)}>
        <nav className={s.mobileNav}>
          <ul className={s.inner}>
            {data.layout.header.links.map((link) => (
              <li key={link.title} className={s.navItem}>
                <Link href={link.link}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </Drawer>
    </>
  );
};
