import { Home } from "@/types/Home";
import { Layout } from "@/types/Layout";
import { create } from "zustand";

interface AppStore {
  data: {
    layout: Layout;
    home: Home;
  };
}

export const useAppStore = create<AppStore>(() => ({
  data: {} as any,
}));
