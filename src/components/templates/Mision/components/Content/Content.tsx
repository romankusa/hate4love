import { useAppStore } from "@/hooks/useAppStore";

import s from "./Content.module.scss";
import Markdown from "react-markdown";
import { Button } from "@/components/atoms/Button/Button";
import { Image } from "@/components/atoms/Image/Image";

export const Content = () => {
  const { data } = useAppStore.getState();
  const ctt = data.mision.content;

  return (
    <section className={s.content}>
      <h6>{ctt.title}</h6>
      <Markdown>{ctt.body}</Markdown>
      {ctt?.buttons && (
        <div className="flex items-center justify-center gap-3">
          {ctt?.buttons?.map((btn) => (
            <Button key={btn.title} secondary={btn.secondary}>
              {!btn.secondary && btn.icon && (
                <Image src={btn.icon.img} alt={btn.icon.alt} />
              )}
              {btn.title}
              {btn.secondary && btn.icon && (
                <Image src={btn.icon.img} alt={btn.icon.alt} />
              )}
            </Button>
          ))}
        </div>
      )}
    </section>
  );
};
