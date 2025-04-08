// hooks/useCartStore.ts
import { create } from 'zustand';

type CartStore = {
  cartLength: number;
  setCartLength: (len: number) => void;
};

export const useCartStore = create<CartStore>((set) => ({
  cartLength: 0,
  setCartLength: (len) => set({ cartLength: len }),
}));
