import { FC } from "react";
import {
  AbstractButton,
  AbstractButtonProps,
} from "../AbstractButton/AbstractButton";

import s from "./Button.module.scss";

export const Button: FC<AbstractButtonProps> = ({ children }) => {
  return (
    <AbstractButton className={s.button}>{children}</AbstractButton>
  );
};
