import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount((count) => count + 1);
  };
  const handleDecrement = () => {
    setCount((count) => count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <div>
      <button data-testid="count" onClick={handleCount}>
        You Clicked - {count} times
      </button>
      <button data-testid="count-dec" onClick={handleDecrement}>
        You Clicked - {count} times
      </button>
      <button data-testid="count-zero" onClick={handleReset}>
        You Clicked - {count} times
      </button>
    </div>
  );
}

export default Counter;
