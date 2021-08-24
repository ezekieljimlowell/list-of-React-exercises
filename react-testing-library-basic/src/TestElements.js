import React, { useState } from "react";

const TestElements = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1 data-testid="counter">Counter is {counter}</h1>
      <button
        type="button"
        data-testid="button-up"
        onClick={() => setCounter(counter + 1)}
      >
        Increment
      </button>
      <button
        type="button"
        data-testid="button-down"
        onClick={() => setCounter(counter - 1)}
      >
        Decrement
      </button>
    </>
  );
};

export default TestElements;
