import React, { useState, useEffect } from "react";

const CounterExample = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]); // Runs whenever count changes

  return (
    <div className="p-4 text-center">
      <h1 className="text-xl mb-2">Count: {count}</h1>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Increment
      </button>
    </div>
  );
};

export default CounterExample;
