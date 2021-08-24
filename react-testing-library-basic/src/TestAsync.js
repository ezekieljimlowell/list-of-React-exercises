import React, { useState } from "react";

const TestAsync = () => {
  const [count, setCount] = useState(0);

  const delay = () =>
    setTimeout(() => {
      setCount(count + 1);
    }, 2500);

  return (
    <div>
      <div>Asynchronous count is: {count}</div>
      <button type="button" data-testid="buttonIncrease" onClick={delay}>
        increment
      </button>
      <button
        type="button"
        data-testid="buttonDecrease"
        onClick={() => setCount(count - 1)}
      >
        decrement
      </button>
    </div>
  );
};

export default TestAsync;
