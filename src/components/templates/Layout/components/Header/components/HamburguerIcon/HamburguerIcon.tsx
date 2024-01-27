import { ComponentProps, FC } from "react";
import s from "./HamburguerIcon.module.scss";

export const HamburguerIcon: FC<ComponentProps<"button">> = ({
  ...props
}) => {
  return (
    <button className={s.container} {...props}>
      {[...new Array(3).keys()].map((key) => (
        <div key={key} className={s.line}></div>
      ))}
    </button>
  );
};
