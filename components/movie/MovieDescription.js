import styles from "./MovieDescription.module.css";

function MovieDescription({ movieData }) {
  const {
    title,
    overview,
    tagline,
    posterPath,
    imgPath,
    genres: genresArray,
    duration,
    releaseDate,
    imdbRating,
  } = movieData;

  const genres = genresArray.map((genre) => genre.name).join(", ");

  return (
    <div>
      <section className={styles.description}>
        <div className={!imgPath && posterPath ? styles["img-box"] : ""}>
          {!imgPath && posterPath && (
            <img src={`https://image.tmdb.org/t/p/w780/${posterPath}`} />
          )}
          <div>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.tagline}>{tagline ? tagline : ""}</p>
            <p className={styles.overview}>{overview}</p>
          </div>
        </div>
        <ul className={styles["list-info"]}>
          <li>
            <span>Genres:</span>
            <p>{genres}</p>
          </li>
          <li>
            <span>Duration:</span>
            <p>{`${duration} minutes`}</p>
          </li>
          <li>
            <span>Released:</span>
            <p>{releaseDate.year}</p>
          </li>
          <li>
            <span>Rating (imdb):</span>
            <p>{imdbRating}</p>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default MovieDescription;
