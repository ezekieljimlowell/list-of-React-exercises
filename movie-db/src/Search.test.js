import Search from "./Search";
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

const SearchComponent = () => {
    return (
        <BrowserRouter>
            <Search />
        </BrowserRouter>
    )
}

describe("initial display of movies", () => {
    beforeAll(() => jest.mock("./__mocks__error/error"));
    it("testing inital display", async () => {
        render(<SearchComponent />);
        const movieTitle = await screen.findByText("Eggs Run");
        expect(movieTitle).toBeInTheDocument();
        const movieReleasedDate1 = await screen.findByText('2021-08-12');
        expect(movieReleasedDate1).toBeInTheDocument();
        const movieRatings = await screen.findByText("Rating: 8.3");
        expect(movieRatings).toBeInTheDocument();

        const movieImage = (await screen.findAllByRole("img", { altText: /Eggs Run/i }))[0];
        expect(movieImage).toBeInTheDocument();
    })
})

describe("search movies", () => {
    it("Search function by movie names", async () => { //search not working
        render(<SearchComponent />)
        const input = screen.getByPlaceholderText("Search for movie");
        fireEvent.change(input, { target: { value: "The Tomorrow War" } });
        const visibleElement = await screen.findByText("The Tomorrow War");
        expect(visibleElement).toBeInTheDocument();
        const movieReleasedDate = (await screen.findAllByText('2021-07-02'))[0];
        expect(movieReleasedDate).toBeInTheDocument();
        const movieRatings = (await screen.findAllByText("Rating: 8.1"))[0];
        expect(movieRatings).toBeInTheDocument();

        const movieImage = await screen.findByAltText("The Tomorrow War");
        expect(movieImage).toBeInTheDocument();
    });

    it("check by multiple elements with the", async () => {
        render(<SearchComponent />)

        const input1 = screen.getByPlaceholderText("Search for movie");
        fireEvent.change(input1, { target: { value: "The" } });

        const visibleElement1 = await screen.findByText("The Tomorrow War");
        expect(visibleElement1).toBeInTheDocument();
        const visibleElement = await screen.findByText("The Suicide Squad");
        expect(visibleElement).toBeInTheDocument();
        const visibleElement2 = await screen.findByText("PAW Patrol: The Movie");
        expect(visibleElement2).toBeInTheDocument();
    })
})

/*describe("Pagination", () => {
    it("test pagination", async () => {
        render(<SearchComponent />)
        const pagination = screen.getByText(3);
        fireEvent.click(pagination);
        jest.mock("./__mocks__/axios")
        const movieResult = await screen.findByText("Ant-Man");
        expect(movieResult).toBeInTheDocument();
        const movieReleasedDate = (await screen.findAllByText("2015-07-14"))[0];
        expect(movieReleasedDate).toBeInTheDocument();
        const movieRatings = (await screen.findAllByText("Rating: 7.1"))[0];
        expect(movieRatings).toBeInTheDocument();

        const movieImage = await screen.findByAltText("Ant-Man");
        expect(movieImage).toBeInTheDocument();
    })
})*/

/*describe("testing error", () => {
    beforeAll(() => jest.mock("./__mocks__error/error"));
    it("Testing error for failed fetch", async () => {
        render(<SearchComponent />);
        const errorElement1 = await screen.findByText("Error");
        expect(errorElement1).toBeInTheDocument();
    })
})

describe("testing error after searching", () => {
    beforeAll(() => jest.mock("./__mocks__error/error"))
    it("error after searching", async () => {
        render(<SearchComponent />);
        const input = screen.getByPlaceholderText("Search for movie");
        fireEvent.change(input, { target: { value: "The tomorrow war" } });

        const errorElement2 = await screen.findByText("Error");
        expect(errorElement2).toBeInTheDocument();
    })
})*/


