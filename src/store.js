import { create } from "zustand";

export const useAppStore = create((set) => ({
  isOpen: false,
  id: null,
  title: "",
  setTitle: (title) => set({ title }),
  setId: (id) => set({ id }),
  setIsOpen: (isOpen) => set({ isOpen }),
}));
