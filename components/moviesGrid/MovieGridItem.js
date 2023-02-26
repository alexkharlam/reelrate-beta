import styles from "./MovieGridItem.module.css";
import { getImagePath } from "@/utils/functions/getImagePath";
import Link from "next/link";

function MovieGridItem({ movieData }) {
  const { title, imdbRating, posterPath, id } = movieData;

  const imgSrc = getImagePath(posterPath, 500);

  return (
    <Link href={`/movies/${id}`} className={styles.item}>
      <img src={imgSrc} alt={title} />
    </Link>
  );
}

export default MovieGridItem;
