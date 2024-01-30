import { Home } from "@/types/Home";
import { Layout } from "@/types/Layout";
import { Mision } from "@/types/Mision";
import { create } from "zustand";

export interface AppStore {
  locale: string;
  data: {
    layout: Layout;
    home: Home;
    mision: Mision;
  };
}

export const useAppStore = create<AppStore>(() => ({
  locale: "",
  data: {} as any,
}));
