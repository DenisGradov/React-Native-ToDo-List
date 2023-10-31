import zustand, { create } from "zustand";

interface props {
  text: string;
  change: (text: string) => void;
}

export const useInput = create<props>((set) => ({
  text: "",
  change: (text: string) => set((state) => ({ ...state, text })),
}));
