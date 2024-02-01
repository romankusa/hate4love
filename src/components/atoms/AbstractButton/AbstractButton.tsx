import { useAppStore } from "@/hooks/useAppStore";
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
    const locale = useAppStore.getState().locale;

    if (to) {
      return (
        <Link
          locale="en"
          ref={ref}
          href={`/${locale}/${to}`}
          {...props}
        />
      );
    }

    if (href) {
      return href.startsWith("/") ? (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        <Link
          locale="en"
          ref={ref}
          {...props}
          href={`/${locale}/${href}`}
        />
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
