import { useCallback, useState } from "react";
import { API_KEY } from "../config/movies-api";

export function useHttpSingleSearch() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const transformData = function (data) {
    const tranfsformedData = data.results.map((result) => ({
      id: result.id,
      title: result.original_title,
      posterPath: result.poster_path,
      releaseDate: result.release_date.toString().slice(0, 4),
      rating: result.vote_average.toFixed(1),
    }));
    console.log(data.results);
    // applyData(tranfsformedData);
  };

  const makeRequest = useCallback(async function (id, applyData) {
    console.log(id);
    if (!id) return;
    setLoading(true);
    setError(false);

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/{${id}}?api_key=${API_KEY}&language=en-US`
      );
      console.log(response);
      const data = await response.json();
      if (!response.ok) throw new Error(data.status_message);

      applyData(data);
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
  };
}
