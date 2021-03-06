import { displayMoviesByPopular } from './Axios';
import { movieApi } from './Axios';
import axios from "axios";
import { render, screen } from '@testing-library/react';
import Search from './Search';

jest.mock("axios")

describe("testing axios get when api fetched and initial display", () => {
    it("axios get when successful", async () => {
        const firstMovie = {
            "adult": false,
            "backdrop_path": "/uHmvk8FnoxpgujDU0RIXLkv2fNt.jpg",
            "genre_ids": [16, 35],
            "id": 573164,
            "original_language": "es",
            "original_title": "Un rescate de huevitos",
            "overview": "A rooster and his fowl partner embark on a dangerous trip to the Congo to recover their stolen eggs from a group of Russian goons.",
            "popularity": 1069.598,
            "poster_path": "/wrlQnKHLCBheXMNWotyr5cVDqNM.jpg",
            "release_date": "2021-08-12",
            "title": "Eggs Run",
            "video": false,
            "vote_average": 8.3,
            "vote_count": 214
        };

        axios.get.mockResolvedValueOnce(firstMovie);
        const result = await displayMoviesByPopular();
        expect(axios.get).toHaveBeenCalledWith(`${movieApi}`);
        expect(result).toEqual(firstMovie);
        render(<Search />)
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

describe("error handling in axios", () => {
    it("error handling", async () => {
        const errorMessage = "failed";
        axios.get.mockRejectedValueOnce(new Error(errorMessage));

        const result = await displayMoviesByPopular();

        expect(axios.get).toHaveBeenCalledWith(`${movieApi}`);
        expect(result).toEqual([]);
    })
})