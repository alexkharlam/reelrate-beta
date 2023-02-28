import styles from "./RateItem.module.css";
import Link from "next/link";
import { useDispatch } from "react-redux";
import Image from "next/image";

import { getImagePath } from "@/utils/functions/getImagePath";
import { deleteRate } from "@/store/rates-slice";

import RateWindow from "./RateWindow";
import { getRatingColor } from "@/utils/functions/getRatingColor";
import { useRateWindow } from "@/utils/hooks/use-rate-window";

function RateItem({ rateData }) {
  const { isRating, toggleIsRating } = useRateWindow();

  const { title, id, rateValue, posterPath } = rateData;
  const src = getImagePath(posterPath, 500);
  const color = getRatingColor(rateValue);

  const dispatch = useDispatch();
  const deleteHandler = () => dispatch(deleteRate(id));

  return (
    <>
      {isRating && <RateWindow onClose={toggleIsRating} movieData={rateData} />}
      <li className={styles.container}>
        <Link href={`movies/${id}`} className={styles["poster-container"]}>
          <div className={styles.filter} />
          <div className={`${styles["rate-container"]} ${color}`}>
            <p className={`${styles["rate-value"]}`}>{rateValue}</p>
          </div>
          <div className={styles.filter} />
          <div className={styles["img-container"]}>
            <Image className={styles.img} src={src} fill alt={title} />
          </div>
        </Link>
        <div className={styles["buttons-container"]}>
          <button
            onClick={toggleIsRating}
            className={styles.change}
            type="button"
          >
            Change rate
          </button>
          <button
            onClick={deleteHandler}
            className={styles.delete}
            type="button"
          >
            Delete rate
          </button>
        </div>
      </li>
    </>
  );
}

export default RateItem;
