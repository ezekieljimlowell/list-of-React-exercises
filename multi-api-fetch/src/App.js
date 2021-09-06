import './App.css';
import React, { useState } from 'react';

function App() {
  const [movies, setMovies] = useState([]);

  var API;
  for (let i = 1; i <= 10; i++) {
    API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=534595d4dcb4b9bd70b8132302e37b1a&page=${i}`
    console.log(API);
  }

  console.log(API);
  const getMovies = () => {
    Promise.all([fetch(API).then(res => res.json())])
    .then(data => console.log(data))
  }

  return (
    <div className="App">
      <button type="button" onClick={getMovies}>Fetch</button>
      {movies.map((movie) => {
        return (
          <div key={movie.id}>{movie.results}</div>
        )
      })}
    </div>
  );
}

export default App;
