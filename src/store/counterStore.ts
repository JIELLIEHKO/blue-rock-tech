import { create } from "zustand/react";

type CounterState = {
  count: number;
  increaseCount: () => void;
  decreaseCount: () => void;
  resetCount: () => void;
}

export const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  decreaseCount: () => set((state) => ({ count: state.count - 1 })),
  resetCount: () => set({ count: 0 }),
}));