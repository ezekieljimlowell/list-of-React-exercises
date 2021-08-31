import React, { useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import Movies from './Movies';

const movieApi = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=534595d4dcb4b9bd70b8132302e37b1a&page=1";

const Search = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(movieApi).then(res => res.json())
            .then((data) => setMovies(data.results))
    }, [])

    console.log(movies);

    return (
        <div>
            <form>
                <label htmlFor="search">Search Movies</label>
                <input type="text" id="search" name="movie" placeholder="Search for movies"></input>
                <button type="submit"><BsSearch /></button>
            </form>
            <div className="movie-container">
                {movies.length > 0 && movies.map((movie) => (
                    <Movies key={movie.id} {...movie} />
                ))}
            </div>
        </div>
    )
}

export default Search;