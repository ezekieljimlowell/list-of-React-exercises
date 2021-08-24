import React from "react";
import { connect } from "react-redux";

const Redux = ({ counter, dispatch }) => {
  const increment = () => dispatch({ type: "INCREMENT" });
  const decrement = () => dispatch({ type: "DECREMENT" });

  return (
    <div>
      <h1>Redux counter</h1>
      <div data-testid="counter">Redux count is: {counter}</div>
      <button type="button" data-testid="buttonIncrement" onClick={increment}>
        INCREMENT
      </button>
      <button type="button" data-testid="buttonDecrement" onClick={decrement}>
        DECREMENT
      </button>
    </div>
  );
};

export default connect(state => ({ counter: state.count }))(Redux);
