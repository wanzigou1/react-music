import { create } from "zustand";
const useBgUrl = create((set) => ({
  bgUrl: "",
  setUrl: () => set((state: string) => ({ bgUrl: state })),
}));

export default useBgUrl;
