import React from "react";
import Redux from "./Redux";
import { render, fireEvent, cleanup, getByRole } from "@testing-library/react";
import userEvent from '@testing-library/react';
import { initialState, Reducer } from "./store/Reducer";
import { Provider } from "react-redux";
import { createStore } from "redux";

const reduxRender = (
  component,
  { initialState, store = createStore(Reducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

afterEach(cleanup);

it("initial state", () => {
  const { getByTestId } = reduxRender(<Redux />);
  expect(getByTestId("counter")).toHaveTextContent("0");
});

it("increment by using Redux", () => {
  const { getByTestId, getByRole } = reduxRender(<Redux />, {
    initialState: { count: 4 }
  });

  fireEvent.click(getByRole("button", {name: /INCREMENT/i}));  
  //userEvent.click(screen.getByText("INCREMENT"));
  expect(getByTestId("counter")).toHaveTextContent("5");
});

it("decrement by using Redux", () => {
    const { getByTestId } = reduxRender(<Redux />, {
        initialState: { count: 24 }
      });
    
      fireEvent.click(getByTestId("buttonDecrement"));
      expect(getByTestId("counter")).toHaveTextContent("23");
})