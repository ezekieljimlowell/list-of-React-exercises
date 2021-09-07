import Search from "./Search";
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { fetchData } from './Search';

afterEach(cleanup);

jest.mock(fetchData);

it("Search function by movie names", async () => {
    render(<Search />)
    const input = screen.getByPlaceholderText("Search for movie");
    userEvent.type(input, "The Tomorrow War");

    const visibleElement = await screen.findByText("The Tomorrow War");
    expect(visibleElement).toBeInTheDocument();
});

describe("multiple elements with the", () => {
    jest.mock(fetchData);
    it("check by multiple elements with the", async () => {
        render(<Search />)
        const input = screen.getByPlaceholderText("Search for movie");
        userEvent.type(input, "the");

        const visibleElement1 = await screen.findByText("The Tomorrow War");
        expect(visibleElement1).toBeInTheDocument();
        const visibleElement = await screen.findByText("The Suicide Squad");
        expect(visibleElement).toBeInTheDocument();
        const visibleElement2 = await screen.findByText("PAW Patrol: The Movie");
        expect(visibleElement2).toBeInTheDocument();
    })
})

describe("pagination button click and search element", () => {
    
})




