import styles from "./MovieRateBlock.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";

import { useRateWindow } from "@/utils/hooks/use-rate-window";

import RateWindow from "../rates/RateWindow";

function MovieRateBlock({ movieData }) {
  const { isRating, toggleIsRating } = useRateWindow();
  const rates = useSelector((state) => state.rates.rates);
  const existingRate = rates.find((rate) => rate.id === movieData.id);

  return (
    <div>
      {isRating && (
        <RateWindow onClose={toggleIsRating} movieData={movieData} />
      )}

      {existingRate && (
        <div className={styles["current-rate-container"]}>
          <p className={styles["current-heading"]}>Your rate</p>
          <p className={styles["current-value"]}>{existingRate.rateValue}</p>
        </div>
      )}

      <button onClick={toggleIsRating} className={styles.rate} type="button">
        <Image src="/star-outline.svg" width="30" height="30" alt="Rate icon" />
        <p>Rate this movie</p>
      </button>
    </div>
  );
}

export default MovieRateBlock;
