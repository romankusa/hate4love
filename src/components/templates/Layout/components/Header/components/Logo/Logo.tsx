import { useAppStore } from "@/hooks/useAppStore";

import s from "./Logo.module.scss";
import Link from "next/link";

export const Logo = () => {
  const state = useAppStore.getState();

  return (
    <Link href="/">
      <img
        className={s.logo}
        src={state.data.layout.header.logo.img}
        alt={state.data.layout.header.logo.alt}
      />
    </Link>
  );
};
