import axios from "axios";

export const movieApi = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=534595d4dcb4b9bd70b8132302e37b1a&page=1`;

export const displayMoviesByPopular = async () => {
    try {
        return await axios.get(`${movieApi}`)
    }
    catch {
        return [];
    }
}