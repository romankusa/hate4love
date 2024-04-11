import { FlipImage as FlipImageProps } from "@/types/sections/HateForLove";
import { FC } from "react";

import s from "./FlipImage.module.scss";
import { Image } from "@/components/atoms/Image/Image";

export const FlipImage: FC<FlipImageProps> = (data) => {
  return (
    <div className={s.flipImage}>
      <div className={s.inner}>
        {/* <Image className={s.front} src={data.front.img} /> */}
        <Image className={s.front} src={data.back.img} />
      </div>
    </div>
  );
};
