import { useEffect, useState } from "react";
import styles from "./MovieBackground.module.css";

function MovieBackground({ imgPath }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const src = `https://image.tmdb.org/t/p/w1280${imgPath}`;

  useEffect(() => setIsLoaded(true), []);

  return (
    <>
      {imgPath && <div className={styles.filter} />}
      {imgPath && (
        <img
          src={src}
          className={`${styles.img} ${isLoaded && styles.animate}`}
        />
      )}
    </>
  );
}

export default MovieBackground;
