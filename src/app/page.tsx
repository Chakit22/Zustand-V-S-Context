"use client";
import { useCountContext } from "./context/CountContext";
import { useCounterStore } from "./stores/CounterStore";

export function ContextUnrelatedState() {
  console.log("ContextUnrelatedState rendered !");
  const { unrelatedState, updateUnrelatedState } = useCountContext();

  return (
    <div className="flex flex-col gap-2">
      <button
        className="bg-blue-500 px-4 py-2 rounded-md"
        onClick={() => updateUnrelatedState()}
      >
        Increment unrelated state
      </button>
      <div className="text-2xl font-bold">{unrelatedState}</div>
    </div>
  );
}

export function ContextCountState() {
  console.log("ContextCountState rendered !");
  const { count, increment } = useCountContext();

  return (
    <div className="flex flex-col gap-2">
      <button
        className="bg-blue-500 px-4 py-2 rounded-md"
        onClick={() => increment()}
      >
        Increment
      </button>
      <div className="text-2xl font-bold">{count}</div>
    </div>
  );
}

// Zustand
export function ZustandUnrelatedState() {
  console.log("ZustandUnrelatedState rendered !");
  const unrelatedState = useCounterStore((state) => state.unrelatedState);
  const updateUnrelatedState = useCounterStore(
    (state) => state.updateUnrelatedState
  );

  return (
    <div className="flex flex-col gap-2">
      <button
        className="bg-blue-500 px-4 py-2 rounded-md"
        onClick={() => updateUnrelatedState()}
      >
        Increment unrelated state
      </button>
      <div className="text-2xl font-bold">{unrelatedState}</div>
    </div>
  );
}

export function ZustandCountState() {
  console.log("ZustandCountState rendered !");
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);

  return (
    <div className="flex flex-col gap-2">
      <button
        className="bg-blue-500 px-4 py-2 rounded-md"
        onClick={() => increment()}
      >
        Increment
      </button>
      <div className="text-2xl font-bold">{count}</div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Context</h1>
      <div className="flex flex-col items-start gap-4">
        <ContextCountState />
        <ContextUnrelatedState />
      </div>
      <hr className="my-4" />
      <h1 className="text-2xl font-bold">Zustand</h1>
      <div className="flex flex-col items-start gap-4">
        <ZustandCountState />
        <ZustandUnrelatedState />
      </div>
    </div>
  );
}
