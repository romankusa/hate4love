import { useAppStore } from "@/hooks/useAppStore";

import s from "./Logo.module.scss";
import { useDimensions } from "@/hooks/useDimensions";
import { AbstractButton } from "@/components/atoms/AbstractButton/AbstractButton";

export const Logo = () => {
  const { isDesktop } = useDimensions();
  const state = useAppStore.getState();

  return (
    <AbstractButton href="/">
      <img
        className={s.logo}
        src={
          isDesktop
            ? state.data.layout.header.logo.img
            : state.data.layout.header.logo.mobileImg
        }
        alt={state.data.layout.header.logo.alt}
      />
    </AbstractButton>
  );
};
