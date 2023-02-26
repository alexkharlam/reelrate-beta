import styles from "./Movie.module.css";

import { transformMovieData } from "@/utils/functions/transformMovieData";

import MovieBackground from "./MovieBackground";
import MovieDescription from "./MovieDescription";
import MovieRateBlock from "./MovieRateBlock";

function Movie({ rowMovieData }) {
  const movieData = transformMovieData(rowMovieData);

  return (
    <main className={`container ${styles["movie-container"]}`}>
      <MovieBackground imgPath={movieData.imgPath} />
      <MovieDescription movieData={movieData} />
      <MovieRateBlock movieData={movieData} />
    </main>
  );
}

export default Movie;
