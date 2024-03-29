import { useAppStore } from "@/hooks/useAppStore";
import s from "./Hero.module.scss";
import { useDimensions } from "@/hooks/useDimensions";
import { Wave } from "./components/Wave/Wave";
import { Logo } from "./components/Logo/Logo";
import { Texts } from "./components/Texts/Texts";

export const Hero = () => {
  const { data } = useAppStore.getState();
  const { isDesktop } = useDimensions();

  return (
    <div className="relative">
      <div
        className={s.hero}
        style={{
          backgroundImage: `url(${
            isDesktop
              ? data.home.hero.background.img
              : data.home.hero.background.mobileImg
          })`,
        }}
      >
        <div className={s.heroContent}>
          <Logo />
          <Texts />
        </div>
      </div>
      <Wave />
    </div>
  );
};
