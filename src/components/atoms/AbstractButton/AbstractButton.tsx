import Link from "next/link";
import { ComponentProps, forwardRef, ReactElement } from "react";

export type AbstractButtonProps = ComponentProps<"button"> &
  ComponentProps<"a"> & { to?: string; ref?: any };

export const AbstractButton = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  AbstractButtonProps
>(
  (
    { href, type, to, ...props }: AbstractButtonProps,
    ref
  ): ReactElement => {
    if (to) {
      return <Link ref={ref} href={to} {...props} />;
    }

    if (href) {
      return href.startsWith("/") ? (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        <Link ref={ref} {...props} href={href} />
      ) : (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        <a
          ref={ref}
          target="_blank"
          {...props}
          href={href}
          rel="noopener noreferrer"
        />
      );
    }

    return (
      <button
        ref={ref}
        // eslint-disable-next-line react/button-has-type
        type={type}
        {...props}
      />
    );
  }
);
