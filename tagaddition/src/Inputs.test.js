import React from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Inputs from "./Inputs";

it("checking rendering", () => {
  const { queryByTestId, queryByPlaceholderText } = render(<Inputs />);
  const input1 = queryByPlaceholderText("input1");
  const input2 = queryByPlaceholderText("input2");

  expect(queryByTestId("addInputs")).toBeInTheDocument();
  expect(input1).toBeInTheDocument();
  expect(input2).toBeInTheDocument();
});

test("check sum value", () => {
  const { getByRole, queryByPlaceholderText, getByText } = render(<Inputs />);
  const input1 = queryByPlaceholderText("input1");
  //fireEvent.change(input1, { target: { value: 10 } }); screen.getByRole("text")
  userEvent.type(input1, "0.1");
  const input2 = queryByPlaceholderText("input2");
  //fireEvent.change(input2, { target: { value: 20 } });
  userEvent.type(input2, "0.2");

  //fireEvent.click(getByTestId("addInputs"));
  userEvent.click(getByRole("button"), {name: /Add/i })
  const sum = getByText(0.3);
  expect(sum).toBeInTheDocument();
});

it("error validation for input1 and input2", () => {
  const { queryByPlaceholderText, getByText } = render(<Inputs />);
  const input1 = queryByPlaceholderText("input1");
  fireEvent.change(input1, { target: { value: "text" } });
  const errorOfInput1 = getByText("Please provide numbers for input1");
  expect(errorOfInput1).toBeInTheDocument();

  const input2 = queryByPlaceholderText("input2");
  fireEvent.change(input2, { target: { value: "no" } });
  const errorOfInput2 = getByText("Please provide numbers for input2");
  expect(errorOfInput2).toBeInTheDocument();
});
