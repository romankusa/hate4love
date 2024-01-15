import { useAppStore } from "@/hooks/useAppStore";
import s from "./Hero.module.scss";
import { useDimensions } from "@/hooks/useDimensions";
import { Wave } from "./components/Wave/Wave";
import { Title } from "./components/Title/Title";

export const Hero = () => {
  const { data } = useAppStore.getState();
  const { isDesktop } = useDimensions();

  console.log({ data });

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
      ></div>
      <Title />
      <Wave />
    </div>
  );
};
