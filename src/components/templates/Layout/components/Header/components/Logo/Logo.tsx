import { useAppStore } from "@/hooks/useAppStore";

import s from "./Logo.module.scss";
import Link from "next/link";
import { useDimensions } from "@/hooks/useDimensions";

export const Logo = () => {
  const { isDesktop } = useDimensions();
  const state = useAppStore.getState();

  return (
    <Link href="/">
      <img
        className={s.logo}
        src={
          isDesktop
            ? state.data.layout.header.logo.img
            : state.data.layout.header.logo.mobileImg
        }
        alt={state.data.layout.header.logo.alt}
      />
    </Link>
  );
};
