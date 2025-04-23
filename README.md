# React State Management Demo

This project demonstrates different approaches to state management in React, with a focus on comparing React Context API and Zustand.

## Project Overview

The project contains examples showing how different state management solutions handle component rendering, specifically highlighting the differences in performance and when components re-render.

### Key Examples

- **Context API Example**: Shows how React's built-in Context API works, including the potential for unnecessary re-renders
- **Zustand Example**: Demonstrates how Zustand provides more granular control over component updates

## State Management Comparison

### React Context API

The Context example demonstrates a common issue with React Context:

```tsx
// In Context Provider:
const [count, setCount] = useState(0);
const [unrelatedState, setUnrelatedState] = useState(0);

// The value object is recreated on EVERY render
const value = {
  count,
  increment: () => setCount(count + 1),
  unrelatedState: number,
  updateUnrelatedState: () => void,
};

// This causes consumers to re-render when ANY state in the provider changes
<CountContext.Provider value={value}>{children}</CountContext.Provider>;
```

When `unrelatedState` changes, the Context Provider re-renders, creating a new `value` object reference. This causes all consumers to re-render, even if they only use `count` which didn't change.

### Zustand

The Zustand example shows a more efficient approach:

```tsx
// Zustand store creation
export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  unrelatedState: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  updateUnrelatedState: () =>
    set((state) => ({ unrelatedState: state.unrelatedState + 1 })),
}));

// Component subscribing to specific state
const count = useCounterStore((state) => state.count);
```

Components using Zustand only re-render when the specific state they subscribe to changes. When `unrelatedState` updates, components that only subscribe to `count` don't re-render.

## Key Benefits of Zustand

1. **Fine-grained subscriptions**: Components only re-render when the specific state they use changes
2. **No Provider needed**: State exists outside the component tree
3. **Simpler API**: Less boilerplate compared to Context API
4. **Built-in performance optimizations**: No need for manual memoization

## How to Test the Examples

1. Open the application in your browser
2. Open the developer console to observe component renders
3. Click the various buttons that update state
4. Notice which components re-render in each example:
   - With Context API: Consumers re-render when any provider state changes
   - With Zustand: Components only re-render when their subscribed state changes

## Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.
