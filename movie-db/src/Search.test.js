import Search from "./Search";
import { render, screen, fireEvent } from '@testing-library/react';

beforeEach(() => {
    jest.mock("./__mocks__/axios")
})
afterEach(() => {
    jest.clearAllMocks();
})

describe("initial display of movies", () => {
    it("testing inital display", async () => {
        render(<Search />);
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
        render(<Search />)
        const input = screen.getByPlaceholderText("Search for movie");
        fireEvent.change(input, { target: { value: "The tomorrow war" } });
        const visibleElement = await screen.findByText("The Tomorrow War");
        expect(visibleElement).toBeInTheDocument();
        const movieReleasedDate = (await screen.findAllByText('2021-07-02'))[0];
        expect(movieReleasedDate).toBeInTheDocument();
        const movieRatings = (await screen.findAllByText("Rating: 8.1"))[0];
        expect(movieRatings).toBeInTheDocument();

        const movieImage = await screen.findByAltText("The Tomorrow War");
        expect(movieImage).toBeInTheDocument();
        screen.debug();
    });

    it("check by multiple elements with the", async () => {
        render(<Search />)

        const input1 = screen.getByPlaceholderText("Search for movie");
        fireEvent.change(input1, { target: { value: "The" } });

        const visibleElement1 = await screen.findByText("The Tomorrow War");
        expect(visibleElement1).toBeInTheDocument();
        const visibleElement = await screen.findByText("The Suicide Squad");
        expect(visibleElement).toBeInTheDocument();
        const visibleElement2 = await screen.findByText("PAW Patrol: The Movie");
        expect(visibleElement2).toBeInTheDocument();
        screen.debug();
    })
})

describe("Pagination", () => {
    it("test pagination", async () => {
            render(<Search />)
            const pagination = screen.getByText(3);
            fireEvent.click(pagination);

            const movieResult = await screen.findByText("Ant-Man");
            expect(movieResult).toBeInTheDocument();
            const movieReleasedDate = (await screen.findAllByText("2015-07-14"))[0];
            expect(movieReleasedDate).toBeInTheDocument();
            const movieRatings = (await screen.findAllByText("Rating: 7.1"))[0];
            expect(movieRatings).toBeInTheDocument();

            const movieImage = await screen.findByAltText("Ant-Man");
            expect(movieImage).toBeInTheDocument();
    })
})


