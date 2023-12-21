import { Layout } from "@/types/Layout";
import { create } from "zustand";

interface AppStore {
  data: {
    layout: Layout;
  };
}

export const useAppStore = create<AppStore>(() => ({
  data: {} as any,
}));
