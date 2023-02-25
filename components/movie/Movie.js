import styles from "./Movie.module.css";
import MovieBackground from "./MovieBackground";
import { transformMovieData } from "@/utils/functions/transformMovieData";
import MovieDescription from "./MovieDescription";
import { motion } from "framer-motion";
import Rate from "./Rate";
import { useSelector } from "react-redux";

function Movie({ rowMovieData }) {
  const isAuthed = useSelector((state) => state.auth.isAuthed);
  const movieData = transformMovieData(rowMovieData);

  console.log(movieData);

  return (
    <main className={`container ${styles["movie-container"]}`}>
      <MovieBackground imgPath={movieData.imgPath} />
      <MovieDescription movieData={movieData} />
      {isAuthed && <Rate movieData={movieData} />}
    </main>
  );
}

export default Movie;
