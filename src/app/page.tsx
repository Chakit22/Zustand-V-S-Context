"use client";
import { useCountContext } from "./context/CountContext";
import { useCounterStore } from "./stores/CounterStore";

export function ContextUnrelatedState() {
  console.log("ContextUnrelatedState rendered !");
  const { unrelatedState, updateUnrelatedState } = useCountContext();

  return (
    <div>
      <button className="bg-blue-500" onClick={() => updateUnrelatedState()}>
        Increment unrelated state
      </button>
      <div>{unrelatedState}</div>
    </div>
  );
}

export function ContextCountState() {
  console.log("ContextCountState rendered !");
  const { count, increment } = useCountContext();

  return (
    <div>
      <button className="bg-blue-500" onClick={() => increment()}>
        Increment
      </button>
      <div>{count}</div>
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
    <div>
      <button className="bg-blue-500" onClick={() => updateUnrelatedState()}>
        Increment unrelated state
      </button>
      <div>{unrelatedState}</div>
    </div>
  );
}

export function ZustandCountState() {
  console.log("ZustandCountState rendered !");
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);

  return (
    <div>
      <button className="bg-blue-500" onClick={() => increment()}>
        Increment
      </button>
      <div>{count}</div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <h1>Context</h1>
      <ContextCountState />
      <ContextUnrelatedState />
      <hr />
      <h1>Zustand</h1>
      <ZustandCountState />
      <ZustandUnrelatedState />
    </div>
  );
}
