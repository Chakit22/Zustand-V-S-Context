"use client";

import { createContext, useState, useContext, ReactNode, useMemo } from "react";

// Define the context type
type CountContextType = {
  count: number;
  increment: () => void;
  unrelatedState: number;
  updateUnrelatedState: () => void;
};

// Create context with a default value
export const CountContext = createContext<CountContextType | undefined>(
  undefined
);

// Parent component that holds state and re-renders children
export function CountProvider({ children }: { children: ReactNode }) {
  console.log("CountProvider rendered!");
  const [count, increment] = useState(0);
  const [unrelatedState, updateUnrelatedState] = useState(0);

  // This value object is recreated on EVERY render
  const value = useMemo(
    () => ({
      count,
      increment: () => increment(count + 1),
      unrelatedState,
      updateUnrelatedState: () => updateUnrelatedState(unrelatedState + 1),
    }),
    [count, unrelatedState]
  );

  return (
    <CountContext.Provider value={value}>{children}</CountContext.Provider>
  );
}

// Custom hook to use the context
export function useCountContext() {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error("useCountContext must be used within a CountProvider");
  }
  return context;
}
