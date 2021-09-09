import Search from "./Search";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { movieSearch } from './Search';

it("Search function by movie names", async () => {
    await jest.mock(movieSearch);
    render(<Search />)
    const input = screen.getByPlaceholderText("Search for movie");
    userEvent.type(input, "The Tomorrow War");

    const visibleElement = await screen.findByText("The Tomorrow War", { timeout: 3000 });
    expect(visibleElement).toBeInTheDocument();
});

it("check by multiple elements with the", async () => {
    await jest.mock(movieSearch);
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




