import React from 'react';

const imageApi = "https://image.tmdb.org/t/p/original";

const Movies = ({ poster_path, title, release_date, vote_average }) => {
    return (
        <div className="movieList">
            <img className="image" src={imageApi + poster_path} alt={title}></img>
            <div className="movieInfo">
                <div className="title">{title}</div>
                <div>{release_date}</div>
                <div>Rating: {vote_average}</div>
            </div>
        </div>
    )
}

export default Movies;