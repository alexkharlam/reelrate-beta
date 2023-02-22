import styles from "./Movie.module.css";
import MovieBackground from "./MovieBackground";
import { transformMovieData } from "@/utils/functions/transformMovieData";
import MovieDescription from "./MovieDescription";

function Movie({ rowMovieData }) {
  const movieData = transformMovieData(rowMovieData);

  console.log(movieData);

  return (
    <main className={`container ${styles["movie-container"]}`}>
      <MovieBackground imgPath={movieData.imgPath} />
      <MovieDescription movieData={movieData} />
    </main>
  );
}

export default Movie;
