import { Button } from "@/components/atoms/Button/Button";
import { Logo } from "./components/Logo/Logo";
import { Nav } from "./components/Nav/Nav";

import s from "./Header.module.scss";
import { useAppStore } from "@/hooks/useAppStore";
import { useDimensions } from "@/hooks/useDimensions";
import { MobileNav } from "./components/MobileNav/MobileNav";
import { useEffect, useState } from "react";
import { debounce } from "@/utils/debounce";
import clsx from "clsx";

export const Header = () => {
  const { data } = useAppStore.getState();
  const { isDesktop } = useDimensions();
  const [show, setShow] = useState(true);

  useEffect(() => {
    let prevScrollpos = window.scrollY;

    const handleScroll = debounce(() => {
      var currentScrollPos = window.scrollY;

      setShow(
        currentScrollPos < 100 || prevScrollpos > currentScrollPos
      );

      prevScrollpos = currentScrollPos;
    }, 10);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-[var(--header-height)]">
      <header
        className={clsx(s.header, {
          [s.active]: show,
        })}
      >
        <div className="flex-1">
          <Logo />
        </div>
        {isDesktop ? <Nav /> : <div></div>}
        <div className="flex-1 flex justify-end">
          {isDesktop ? (
            <Button href={data.layout.header.button.link}>
              <img
                src={data.layout.header.button.icon?.img}
                alt={data.layout.header.button.icon?.alt}
              />
              {data.layout.header.button.title}
            </Button>
          ) : (
            <MobileNav />
          )}
        </div>
      </header>
    </div>
  );
};
