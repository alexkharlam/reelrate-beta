import styles from "./SearchResultItem.module.css";
import Link from "next/link";

import { getImagePath } from "@/utils/functions/getImagePath";

import { getRatingColor } from "@/utils/functions/getRatingColor";

function HeaderResultItem({ movie }) {
  const { posterPath, title, releaseDate: year, rating } = movie;
  const imgSrc = getImagePath(posterPath, 500);
  const color = getRatingColor(rating);

  return (
    <li className={styles.item}>
      <Link className={styles.link} href={`/movies/${movie.id}`}>
        <div className={styles["img-container"]}>
          <img alt="Poster of movie" src={imgSrc} width={100} />
        </div>
        <div className={styles.description}>
          <p className={styles.title}>{title}</p>
          <p className={styles.year}>{year}</p>
          <p className={styles.rating}>
            IMDB: <span className={color}>{rating}</span>
          </p>
        </div>
      </Link>
    </li>
  );
}

export default HeaderResultItem;
