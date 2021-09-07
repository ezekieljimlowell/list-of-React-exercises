import React, { useState, useEffect } from 'react';
import Movies from './Movies';
import Pagination from './Pagination';

const Search = () => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [moviesPerPage] = useState(20);

    const movieApiPage1 = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=534595d4dcb4b9bd70b8132302e37b1a&page=1`;

    const movieApiPagination = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=534595d4dcb4b9bd70b8132302e37b1a&page=`;


    useEffect((pageNumber) => {
        fetch(movieApiPage1).then(result => result.json())
            .then(data => setMovies(data.results))
    }, [movieApiPage1])

    const changeHandler = (e) => {
        setSearch(e.target.value);
    }

    const paginate = (pageNumber) => {
        console.log(pageNumber);
        setPage(pageNumber)
        let pageNumbers = new Array(10).join(",");
        const fetchData = () => {
            const moviesInfoPromiseArray = pageNumbers.split(",").map((item, index) => fetch(`${movieApiPagination}${index + 1}`)
                .then(res => res.json()))
            const moviesInfoResultArrayPromise = Promise.all(moviesInfoPromiseArray)
            // Promise<Array<Object>>

            moviesInfoResultArrayPromise.then((data) => {
                setMovies(
                    data.map((movie => movie.results))
                        .reduce((acc, current) => acc.concat(current), [])
                )
            }
            )
        }
        fetchData();
    };

    const indexOfLastMovie = page * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

    return (
        <div>
            <label htmlFor="search">Search Movies</label>
            <input
                type="text" id="search"
                name="movie"
                placeholder="Search for movie"
                value={search}
                onChange={(e) => changeHandler(e)}>
            </input>
            <div className="movie-container">
                {currentMovies.length > 0 && currentMovies.filter((val) => {
                    if (search === "") {
                        return val;
                    }
                    else if (val.title.toLowerCase().includes(search.toLowerCase())) {
                        return val;
                    }
                    else {
                        return null;
                    }
                }).map((movie) => (
                    <Movies key={movie.id} {...movie} />
                ))}
            </div>
            <Pagination
                moviesPerPage={moviesPerPage}
                paginate={paginate}
                totalMovies={movies.length}
            />
        </div>
    )
}

export default Search;
