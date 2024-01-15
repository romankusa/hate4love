import { useAppStore } from "@/hooks/useAppStore";
import s from "./MobileNav.module.scss";
import Link from "next/link";

export const MobileNav = () => {
  const { data } = useAppStore.getState();

  return (
    <nav className={s.mobileNav}>
      <ul className={s.inner}>
        {data.layout.header.links.map((link) => (
          <li key={link.title} className={s.navItem}>
            <Link href={link.link}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
