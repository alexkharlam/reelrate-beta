import Link from "next/link";
import React from "react";
import MovieRating from "../ui/MovieRating";

import styles from "./HeaderResultItem.module.css";

function HeaderResultItem({ movie }) {
  const { posterPath, title, releaseDate: year, rating } = movie;

  return (
    <li className={styles.item}>
      <Link className={styles.link} href={`/movies/${movie.id}`}>
        <div className={styles["img-container"]}>
          <img
            alt="Poster of movie"
            src={`http://image.tmdb.org/t/p/w500/${posterPath}`}
            width={100}
          />
        </div>
        <div className={styles.description}>
          <p className={styles.title}>{title}</p>
          <p className={styles.year}>{year}</p>
          <MovieRating rating={rating} />
        </div>
      </Link>
    </li>
  );
}

export default HeaderResultItem;
