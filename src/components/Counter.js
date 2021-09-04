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
      <p data-testid="count">You Clicked - {count} times</p>
      <button onClick={handleCount}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
}

export default Counter;
