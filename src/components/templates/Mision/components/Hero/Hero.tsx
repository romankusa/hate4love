import { useAppStore } from "@/hooks/useAppStore";

import s from "./Hero.module.scss";
import { useDimensions } from "@/hooks/useDimensions";

function getHighlight(text: string, highlight?: string) {
  if (!highlight) return text;

  const regex = new RegExp(`(${highlight})`, "gi");
  const parts = text.split(regex);

  return parts.map((part, index) => {
    if (part.toLowerCase() === highlight.toLowerCase()) {
      return (
        <span key={index} className={s.titleHighlight}>
          {part}
        </span>
      );
    } else {
      return <span key={index}>{part}</span>;
    }
  });
}

export const Hero = () => {
  const { data } = useAppStore.getState();
  const hro = data.mision.hero;

  const { isDesktop } = useDimensions();

  return (
    <section className={s.hero}>
      <div
        className={s.bg}
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url(${
            isDesktop || !hro.background.mobileImg
              ? hro.background.img
              : hro.background.mobileImg
          })`,
        }}
      ></div>
      <h1>{getHighlight(hro.title, hro.highlight)}</h1>
    </section>
  );
};
