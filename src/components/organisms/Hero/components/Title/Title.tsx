import { useAppStore } from "@/hooks/useAppStore";

import s from "./Title.module.scss";

export const Title = () => {
  const { data } = useAppStore.getState();

  const texts = data.home.hero.text.split(" ");

  return (
    <h1 className={s.title}>
      {texts.map((text) => {
        const isHighlight = text === data.home.hero.highlight;

        if (isHighlight) {
          return (
            <div className="relative" key={text}>
              <span>{text}</span>
              <img
                className={s.brush}
                src="./brush-highlight.png"
                alt="Highlight"
              />
            </div>
          );
        }

        return <span key={text}>{text}</span>;
      })}
    </h1>
  );
};
