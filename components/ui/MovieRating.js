import React from "react";

import styles from "./MovieRating.module.css";

function MovieRating({ rating }) {
  const color =
    rating >= 8
      ? "dark-green"
      : rating >= 7
      ? "green"
      : rating >= 6
      ? "yellow"
      : rating >= 5
      ? "dark-yellow"
      : rating > 0
      ? "red"
      : "gray";

  return (
    <p className={styles.rating}>
      IMDB: <span className={styles[color]}>{rating}</span>
    </p>
  );
}

export default MovieRating;
