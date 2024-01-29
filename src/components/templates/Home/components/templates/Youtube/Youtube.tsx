import { FC } from "react";

import s from "./Youtube.module.scss";

interface YoutubeProps {
  data: {
    id: string;
    type: string;
    ytLink: string;
  };
}

export const Youtube: FC<YoutubeProps> = ({ data }) => {
  return (
    <section id={data.id} className={s.yt}>
      <iframe src={data.ytLink} />
    </section>
  );
};
