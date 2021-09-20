import React, { useState, useEffect } from 'react';
import Movies from './Movies';
import Pagination from './Pagination';
import axios from 'axios';

const Search = ({ movie }) => {
    const [movies, setMovies] = useState("");
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [moviesPerPage] = useState(20);
    const [error, setError] = useState("");

    const movieApi = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=534595d4dcb4b9bd70b8132302e37b1a&page=${page}`;

    const movieApiSearch = `https://api.themoviedb.org/3/search/movie?api_key=534595d4dcb4b9bd70b8132302e37b1a&query=${search}&page=${page}&include_adult=false`;

    useEffect(() => {
        const movieSearch = async () => {
            try {
                const movieSearchResult = await axios.get(`${movieApiSearch}`, {
                    params: search
                });
                return setMovies(movieSearchResult.data.results);
            } catch (e) {
                return setError("Error");
            }
        }

        const displayMoviesByPopular = async () => {
            try {
                const movie = await axios.get(`${movieApi}${page}`);
                return setMovies(movie.data.results);
            } catch (e) {
                return setError("Error");
            }
        }
        const fetchData = () => {
            if (search !== "") {
                movieSearch()
            }
            else {
                displayMoviesByPopular()
            }
        };
        fetchData();
    }, [movieApi, movieApiSearch, page, search])

    const onSearchInput = (e) => {
        setSearch(e.target.value);
    }

    return (
        <div>
            <label htmlFor="search">Search Movies</label>
            <input
                type="text" id="search"
                name="movie"
                placeholder="Search for movie"
                value={search}
                onChange={(e) => onSearchInput(e)}>
            </input>
            <div className="movie-container">
                {movies.length > 0 && movies.map((movie) => (
                    <Movies key={movie.id} {...movie} />
                ))}
            </div>
            <Pagination
                paginate={setPage}
                moviesPerPage={moviesPerPage}
            />
            <div>{error}</div>
        </div>
    )
}

export default Search;
