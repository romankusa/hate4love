import {
  FlipImage as FlipImageProps,
  HateForLoveSection,
  Title,
} from "@/types/sections/HateForLove";
import { FC } from "react";

import s from "./Hate4love.module.scss";
import { useDimensions } from "@/hooks/useDimensions";
import { FlipImage } from "./components/FlipImage/FlipImage";
import { Cover } from "./components/Cover/Cover";

interface Hate4loveProps {
  data?: HateForLoveSection;
}

export const Hate4love: FC<Hate4loveProps> = ({ data }) => {
  const { isDesktop } = useDimensions();

  if (!isDesktop) {
    const itemsWithMobileImages =
      data?.flipImages.filter((item) => "mobileImg" in item.front) ||
      [];

    const itemsWithoutMobileImages =
      data?.flipImages.filter(
        (item) => !("mobileImg" in item.front)
      ) || [];

    const remainingItemsNeeded = 5 - itemsWithMobileImages.length;

    const finalList = itemsWithMobileImages.concat(
      itemsWithoutMobileImages.slice(0, remainingItemsNeeded)
    );

    return (
      <section id={data?.id} className={s.hateforlove}>
        <Cover {...(data?.title as Title)} />
        <div className={s.grid}>
          <div className={s.column}>
            <div className={s.item}>
              <FlipImage {...(finalList[0] as FlipImageProps)} />
            </div>
            <div className={s.item}>
              <FlipImage {...(finalList[1] as FlipImageProps)} />
            </div>
          </div>
          <div className={s.column}>
            <div className={s.item}>
              <FlipImage {...(finalList[2] as FlipImageProps)} />
            </div>
            <div className={s.item}>
              <FlipImage {...(finalList[3] as FlipImageProps)} />
            </div>
            <div className={s.item}>
              <FlipImage {...(finalList[4] as FlipImageProps)} />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id={data?.id} className={s.hateforlove}>
      <Cover {...(data?.title as Title)} />
      <div className={s.grid}>
        <div className={s.column}>
          <div className={s.item}>
            <FlipImage {...(data?.flipImages[0] as FlipImageProps)} />
          </div>
          <div className={s.item}>
            <FlipImage {...(data?.flipImages[1] as FlipImageProps)} />
          </div>
        </div>
        <div className={s.column}>
          <div className={s.item}>
            <FlipImage {...(data?.flipImages[2] as FlipImageProps)} />
          </div>
          <div className={s.item}>
            <FlipImage {...(data?.flipImages[3] as FlipImageProps)} />
          </div>
          <div className={s.item}>
            <FlipImage {...(data?.flipImages[4] as FlipImageProps)} />
          </div>
        </div>
        <div className={s.column}>
          <div className={s.item}>
            <FlipImage {...(data?.flipImages[5] as FlipImageProps)} />
          </div>
          <div className={s.item}>
            <FlipImage {...(data?.flipImages[6] as FlipImageProps)} />
          </div>
        </div>
      </div>
    </section>
  );
};
