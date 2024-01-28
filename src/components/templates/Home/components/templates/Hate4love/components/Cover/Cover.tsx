import { FC } from "react";
import s from "./Cover.module.scss";
import { Title } from "@/types/sections/HateForLove";
import { Image } from "@/components/atoms/Image/Image";
import clsx from "clsx";

export const Cover: FC<Title> = (data) => {
  return (
    <div className={clsx(s.cover, "cover")}>
      <Image src={data.icon.img} />
      <p>{data.text}</p>
    </div>
  );
};
