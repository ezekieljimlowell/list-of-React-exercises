import React from "react";
import {
  render,
  fireEvent,
  waitFor,
  cleanup
} from "@testing-library/react";
import TestAsync from "./TestAsync";

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
  cleanup();
});

/*it("using waitFor", async () => {
  const { getByRole, getByText } = render(<TestAsync />);
  fireEvent.click(getByRole("button", { name: /increment/i }));
  const counter = await waitFor(() => waitFor(() => getByText("1")));
  expect(counter).toBeInTheDocument();
});*/

/*it("using findByText", async () => {
  const { getByRole, findByText } = render(<TestAsync />);
  fireEvent.click(getByRole("button", { name: /increment/i }));
  const counter = await findByText("1", {}, { timeout: 2000 });
  expect(counter).toBeInTheDocument();
});*/

/*it("using Promise", async () => {
  const { getByRole, findByText } = render(<TestAsync />);
  fireEvent.click(getByRole("button", { name: /increment/i }));
  const r = findByText("1");
  const counter = await Promise.resolve(r);
  expect(counter).toBeInTheDocument();
});*/

it("using mock function", async () => {
  jest.useFakeTimers();
  //jest.runAllTimers();
  const { getByRole, findByText } = render(<TestAsync />);
  fireEvent.click(getByRole("button", { name: /increment/i }));
  jest.advanceTimersByTime(2000);
  const counter = await findByText("1");
  expect(counter).toBeInTheDocument();
});
