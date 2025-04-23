import { create } from "zustand";

// Create a type for the store
type CounterStore = {
  count: number;
  unrelatedState: number;
  increment: () => void;
  updateUnrelatedState: () => void;
};

// Create Zustand store
export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  unrelatedState: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  updateUnrelatedState: () =>
    set((state) => ({ unrelatedState: state.unrelatedState + 1 })),
}));
