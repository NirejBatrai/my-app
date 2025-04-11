"use client";

import { useState } from "react";

export function Button() {
  const [count, setCount] = useState(0);
  function add() {
    // count++;
    setCount(count + 1);
  }
  function minus() {
    // count++;
    setCount(count - 1);
  }
  function Reset() {
    // count++;
    setCount(0);
  }

  return (
    <div>
      <h1 className="m-10">{count}</h1>
      <div className="border border-2 w-30">
        <button
          onClick={add}
          className="bg-red-300 p-12 b-2 m-5  cursor-pointer text-black"
        >
          +
        </button>
        <button
          onClick={minus}
          className="bg-red-300 p-12 b-2 m-5  cursor-pointer text-black"
        >
          -
        </button>

        <button
          onClick={Reset}
          className="bg-red-300 p-2 b-2 m-5  cursor-pointer text-black"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
