import { CarouselSlide } from "@/types/sections/Carousel";
import { FC } from "react";

import s from "./Slide.module.scss";
import { findHighlight } from "./findHighlight";
import { useDimensions } from "@/hooks/useDimensions";

export const Slide: FC<CarouselSlide> = ({
  text,
  separator,
  largeText,
  copyright,
  highlight,
  background,
}) => {
  const { isDesktop } = useDimensions();

  const finalText = findHighlight(
    text,
    isDesktop ? highlight : (highlight.split(" ").pop() as string)
  );

  return (
    <div className={s.slide}>
      <div
        className={s.slideBackground}
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url(${
            !isDesktop && background.mobileImg
              ? background.mobileImg
              : background.img
          }), lightgray 50% / cover no-repeat`,
        }}
      ></div>
      <div className={s.slideInner}>
        <p className={s.text}>{finalText}</p>
        <span className={s.text}>{separator}</span>
        <p className={s.largeText}>{largeText}</p>
        <span className={s.copy}>{copyright}</span>
      </div>
    </div>
  );
};
