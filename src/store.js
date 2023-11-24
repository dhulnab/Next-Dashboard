import { create } from "zustand";

export const useAppStore = create((set) => ({
  isOpen: false,
  id: null,
  title: "",
  price: "",
  setPrice: (price) => set({ price }),
  setTitle: (title) => set({ title }),
  setId: (id) => set({ id }),
  setIsOpen: (isOpen) => set({ isOpen }),
}));
