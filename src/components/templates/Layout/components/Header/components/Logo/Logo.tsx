import { useAppStore } from "@/hooks/useAppStore";
import { useEffect } from "react";

export const Logo = () => {
  const state = useAppStore.getState();

  useEffect(() => {
    console.log({ state });
  }, []);

  return <img src={state.data.layout.header.logo} alt="imagen" />;
};
