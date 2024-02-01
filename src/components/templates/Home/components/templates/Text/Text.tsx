import { FC } from "react";

import s from "./Text.module.scss";
import { TextSection } from "@/types/sections/Text";
import { Image } from "@/components/atoms/Image/Image";
import { Number as NumberComponent } from "../Numbers/components/Number";
import { isNumber } from "@/utils/isNumber";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import clsx from "clsx";
import { Button } from "@/components/atoms/Button/Button";
import Markdown from "react-markdown";

interface TextProps {
  data: TextSection;
}

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

export const Text: FC<TextProps> = ({ data }) => {
  const { targetRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  });
  const hasBackgroundImage = Boolean(data.image);
  const backgroundStyle = hasBackgroundImage
    ? { backgroundImage: `url(${data.image.img})` }
    : undefined;

  const hasButtons = Boolean(data?.buttons);

  return (
    <section
      ref={targetRef}
      id={data.id}
      className={clsx(s.text, {
        [s.invert]: hasBackgroundImage,
        [s.isHelp]: data.id === "help",
      })}
      style={backgroundStyle}
    >
      <div className="flex justify-center items-center gap-7">
        {data?.title?.icon && (
          <Image
            src={data.title.icon.img}
            alt={data.title.icon.alt}
            className={s.titleIcon}
          />
        )}
        {data?.title?.text && (
          <h4 className={s.title}>
            {isNumber(data?.title?.text) ? (
              <NumberComponent
                active={isIntersecting}
                targetNumber={Number(data?.title?.text)}
              />
            ) : (
              getHighlight(
                data?.title?.text as string,
                data.title.highlight
              )
            )}
          </h4>
        )}
      </div>
      {data.body && (
        <div className={s.body}>
          <Markdown>{data.body}</Markdown>
        </div>
      )}
      {hasButtons && (
        <div className="flex items-center justify-center gap-3">
          {data?.buttons?.map((btn) => (
            <Button
              key={btn.title}
              secondary={btn.secondary}
              href={btn.link}
            >
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
