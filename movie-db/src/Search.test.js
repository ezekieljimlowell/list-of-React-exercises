import Search from "./Search";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

it("testing change handler of input", () => {
    render(<Search />);

    const input = screen.getByPlaceholderText("Search for movie");
    userEvent.type(input, "Jungle Cruise");

    const visibleElement = screen.getByText("Jungle Cruise");
    console.log(visibleElement);
    expect(visibleElement).toBeInTheDocument();
})
