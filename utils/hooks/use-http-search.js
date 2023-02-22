import { useCallback, useState } from "react";

import { API_KEY } from "../config/movies-api";

export function useHttpSearch() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [results, setResults] = useState([]);

  const transformData = function (data) {
    const tranfsformedData = data.results.map((result) => ({
      id: result.id,
      title: result.original_title,
      posterPath: result.poster_path,
      releaseDate: result.release_date.toString().slice(0, 4),
      rating: result.vote_average.toFixed(1),
    }));
    console.log(data.results);
    setResults(tranfsformedData);
  };

  const makeRequest = useCallback(async function (query) {
    if (!query.length > 0) return;
    setLoading(true);
    setError(false);

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
      );

      if (!response.ok) throw new Error("Something wrong with response");

      const data = await response.json();

      if (data.results.length === 0) throw new Error(`Can't find movies`);
      transformData(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
      console.error("💥" + error);
    }
  }, []);

  return {
    makeRequest,
    loading,
    error,
    results,
    setResults,
  };
}
