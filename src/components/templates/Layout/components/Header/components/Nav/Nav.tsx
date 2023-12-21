import { useAppStore } from "@/hooks/useAppStore";
import Link from "next/link";

import s from "./Nav.module.scss";

export const Nav = () => {
  const { data } = useAppStore.getState();

  return (
    <ul className="flex items-center gap-28">
      {data.layout.header.links.map((link) => (
        <li key={link.title} className={s.navItem}>
          <Link href={link.link}>{link.title}</Link>
        </li>
      ))}
    </ul>
  );
};
