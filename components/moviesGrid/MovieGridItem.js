import styles from "./MovieGridItem.module.css";
import Link from "next/link";
import Image from "next/image";

import { getImagePath } from "@/utils/functions/getImagePath";

function MovieGridItem({ movieData }) {
  const { title, posterPath, id } = movieData;

  const imgSrc = getImagePath(posterPath, 500);

  return (
    <Link href={`/movies/${id}`} className={styles.item}>
      <Image src={imgSrc} alt={title} fill />
    </Link>
  );
}

export default MovieGridItem;
