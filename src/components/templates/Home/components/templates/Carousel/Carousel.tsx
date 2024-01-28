import { CarouselSection } from "@/types/sections/Carousel";
import { FC } from "react";
import { Carousel as AntdCarousel } from "antd";
import { NextArrow, PrevArrow } from "./components/Arrows/Arrows";

import s from "./Carousel.module.scss";
import { Slide } from "./components/Slide/Slide";
import { useDimensions } from "@/hooks/useDimensions";

interface CarouselProps {
  data?: CarouselSection;
}

export const Carousel: FC<CarouselProps> = ({ data }) => {
  const { isDesktop } = useDimensions();

  return (
    <section id={data?.id}>
      <AntdCarousel
        className={s.carousel}
        effect="fade"
        arrows
        nextArrow={isDesktop ? <NextArrow /> : undefined}
        prevArrow={isDesktop ? <PrevArrow /> : undefined}
      >
        {data?.carousel.map((car, indx) => (
          <Slide key={indx} {...car} />
        ))}
      </AntdCarousel>
    </section>
  );
};
