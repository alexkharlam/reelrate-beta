import styles from "./MovieBackground.module.css";
import { useEffect, useState } from "react";

function MovieBackground({ imgPath }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const src = `https://image.tmdb.org/t/p/w1280${imgPath}`;

  useEffect(() => setIsLoaded(true), []);

  return (
    <>
      {imgPath && <div className={styles.filter} />}
      {imgPath && (
        <div className={styles["img-container"]}>
          <img
            src={src}
            className={`${styles.img} ${isLoaded && styles.animate}`}
          />
        </div>
      )}
    </>
  );
}

export default MovieBackground;
