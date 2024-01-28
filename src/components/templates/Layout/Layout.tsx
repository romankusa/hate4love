import { FC, PropsWithChildren } from "react";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
