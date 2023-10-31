import zustand, { create } from "zustand";
interface props {
  list: string[];
  add: (newString: string) => void;
  dell: (newString: string) => void;
}
export const useTodoList = create<props>((set) => ({
  list: [],
  add: (newString: string) =>
    set((state) => ({ list: [...state.list, newString] })),
  dell: (stringForDelleate: string) =>
    set((state) => ({
      list: [...state.list.filter((item) => item !== stringForDelleate)],
    })),
}));
