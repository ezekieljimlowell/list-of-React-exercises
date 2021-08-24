import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TestElements from "./TestElements";

it("should equal to zero", () => {
  const { getByText } = render(<TestElements />);
  expect(getByText("Counter is 0")).toBeInTheDocument();
});

it('should be enabled', () => {
  const { getByTestId } = render(<TestElements />);
  expect(getByTestId("button-up")).not.toHaveAttribute("disabled");
})

it('should be disabled', () => {
    const { getByTestId } = render(<TestElements />);
    expect(getByTestId("button-down")).not.toBeDisabled();
})

it("increment", () => {
    const { getByTestId } = render(<TestElements />);
    fireEvent.click(getByTestId("button-up"));
    expect(getByTestId("counter")).toHaveTextContent(1);
})

it("decrement", () => {
    const { getByTestId } = render(<TestElements />);
    fireEvent.click(getByTestId("button-down"));
    expect(getByTestId("counter")).toHaveTextContent(-1);
})

it("should take a snapshot", () => {
    const { asFragment } = render(<TestElements />);
    expect(asFragment(<TestElements />)).toMatchSnapshot();
  });
