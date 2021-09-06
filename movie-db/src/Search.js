import React, { useState, useEffect } from 'react';
import Movies from './Movies';
import Pagination from './Pagination';

const Search = () => {

    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [moviesPerPage] = useState(20);

    const movieApi = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=534595d4dcb4b9bd70b8132302e37b1a&page=`;

    const pageNumbers = new Array(10).join(",");

    useEffect(() => {
        const mapping = pageNumbers.split(",").map((index) => fetch(`${movieApi}${index + 1}`)
            .then(res => res.json()))
        console.log(mapping);
        const promises = Promise.all(mapping)
        promises.then((data) =>
            setMovies(data.map((movie => movie.results)).reduce((acc, current) => {
                return acc.concat(current)
            }, [])))
    }, [])

    const changeHandler = (e) => {
        setSearch(e.target.value);
    }

    //paginate movies
    const indexOfLastMovie = page * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

    const paginate = pageNumber => {
        console.log(pageNumber, movies);
        setPage(pageNumber)
    };

    return (
        <div>
            <label htmlFor="search">Search Movies</label>
            <input
                type="text" id="search"
                name="movie"
                placeholder="Search for movie"
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