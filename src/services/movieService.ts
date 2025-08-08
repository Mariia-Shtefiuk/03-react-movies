import axios from "axios";
import { Movie } from "../types/movie";

const API_KEY = import.meta.env.VITE_TMDB_TOKEN;
const BASE_URL = "https://api.themoviedb.org/3";

interface FetchMoviesResponse {
  results: Movie[];
}

export async function fetchMovies(query: string): Promise<Movie[]> {
  const response = await axios.get<FetchMoviesResponse>(
    `${BASE_URL}/search/movie`,
    {
      params: {
        api_key: API_KEY,
        query,
        language: "en-US",
        include_adult: false,
      },
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    }
  );
  return response.data.results;
}
