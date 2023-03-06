import styles from "./MoviesGrid.module.css";

import MovieGridItem from "./MovieGridItem";
import CenteredMessage from "../ui/CenteredMessage";

function MoviesGrid({ title, movies }) {
  // only showing first 10 of popular movies on the main page:
  if (!movies) return <CenteredMessage message="Error getting movies" />;
  const slicedMovies = movies.results.slice(0, 10);

  const moviesJSX = slicedMovies.map((movie) => {
    const data = {
      posterPath: movie.poster_path,
      title: movie.title,
      imdbRating: movie.vote_average,
      id: movie.id,
    };
    return <MovieGridItem key={data.id} movieData={data} />;
  });

  return (
    <section className={styles.container}>
      <h2>{title}</h2>
      <div className={styles.grid}>{moviesJSX}</div>
    </section>
  );
}

export default MoviesGrid;
