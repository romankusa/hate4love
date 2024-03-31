import { FC } from "react";
import s from "./Video.module.scss";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(import("react-player"), {
  ssr: false,
});

interface VideoProps {
  data: {
    id: string;
    video: {
      source: string;
      placeholderImg: string;
    };
  };
}

export const Video: FC<VideoProps> = ({ data }) => {
  return (
    <section id={data?.id} className={s.video}>
      <ReactPlayer
        playsinline
        light={data.video.placeholderImg}
        controls
        url={data.video.source}
      />
    </section>
  );
};
