import Search from "./Search";
import { render, screen, fireEvent } from '@testing-library/react';

beforeEach(() => {
    jest.mock("./__mocks__/error")
})
afterEach(() => {
    jest.clearAllMocks();
})

describe("testing error", () => {
    it("Testing error for failed fetch", async () => {
            render(<Search />);
            const errorElement1 = await screen.findByText("Error");
            expect(errorElement1).toBeInTheDocument();
    })
})

describe("testing error after searching", () => {
    it("error after searching", async () => {
            render(<Search />);
            const input = screen.getByPlaceholderText("Search for movie");
            fireEvent.change(input, { target: { value: "The tomorrow war" } });

            const errorElement2 = await screen.findByText("Error");
            expect(errorElement2).toBeInTheDocument();
    })
})