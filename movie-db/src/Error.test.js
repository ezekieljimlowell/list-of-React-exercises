import Search from "./Search";
import { screen, fireEvent, render } from '@testing-library/react';

beforeAll(() => {
    jest.mock("./__mocks__error/error")
})

describe("testing error", () => {
    beforeAll(() => jest.mock("./__mocks__error/error"));
    it("Testing error for failed fetch", async () => {
        render(<Search />);
        const errorElement1 = await screen.findByText("Error");
        expect(errorElement1).toBeInTheDocument();
    })
})

describe("testing error after searching", () => {
    beforeAll(() => jest.mock("./__mocks__error/error"))
    it("error after searching", async () => {
        render(<Search />);
        const input = screen.getByPlaceholderText("Search for movie");
        fireEvent.change(input, { target: { value: "The tomorrow war" } });

        const errorElement2 = await screen.findByText("Error");
        expect(errorElement2).toBeInTheDocument();
    })
})
