import MovieGridItem from "./MovieGridItem";
import styles from "./MoviesGrid.module.css";

function MoviesGrid({ title, movies }) {
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
