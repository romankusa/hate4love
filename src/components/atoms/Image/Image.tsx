import clsx from "clsx";
import { ComponentPropsWithoutRef, FC } from "react";

export const Image: FC<ComponentPropsWithoutRef<"img">> = ({
  src,
  className,
  ...props
}) => {
  return (
    <img
      className={clsx("lazyload", className)}
      data-src={src}
      {...props}
    />
  );
};
