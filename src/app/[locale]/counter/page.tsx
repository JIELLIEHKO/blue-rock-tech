'use client'

import { useCounterStore } from "@/store/counterStore";

export default function Page() {
const {count, increaseCount, decreaseCount, resetCount} = useCounterStore();

  return (
    <main className="max-w-7xl mx-auto px-4 pt-8 md:px-6 md:pt-12 flex flex-col gap-4">
      <h1>Counter: {count}</h1>
      <div className="flex gap-2">
        <button className="border border-green-500 px-2" onClick={increaseCount}>
          Increment
        </button>
        <button className="border border-red-500 px-2" onClick={decreaseCount}>
          Decrement
        </button>
        <button className="border border-yellow-500 px-2" onClick={resetCount}>
          Reset
        </button>
      </div>
    </main>
  );
}
