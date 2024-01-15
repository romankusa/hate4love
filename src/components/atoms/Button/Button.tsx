import { FC } from "react";
import {
  AbstractButton,
  AbstractButtonProps,
} from "../AbstractButton/AbstractButton";

import s from "./Button.module.scss";

export const Button: FC<AbstractButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <AbstractButton className={s.button} {...props}>
      {children}
    </AbstractButton>
  );
};
