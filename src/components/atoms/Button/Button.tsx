import { FC } from "react";
import {
  AbstractButton,
  AbstractButtonProps,
} from "../AbstractButton/AbstractButton";

import s from "./Button.module.scss";
import clsx from "clsx";

interface ButtonProps extends AbstractButtonProps {
  secondary?: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  secondary,
  ...props
}) => {
  return (
    <AbstractButton
      className={clsx(s.button, {
        [s.secondary]: secondary,
      })}
      {...props}
    >
      {children}
    </AbstractButton>
  );
};
