import { addRate } from "@/store/rates-slice";
import Image from "next/image";
import { useDispatch } from "react-redux";
import styles from "./RateWindow.module.css";

function RateWindow({ movieData, onClose }) {
  const dispatch = useDispatch();
  const rates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const rateHandler = function (e) {
    const rate = {
      id: movieData.id,
      rateValue: e.target.textContent,
      posterPath: movieData.posterPath,
      title: movieData.title,
    };

    dispatch(addRate(rate));

    onClose();
  };

  return (
    <>
      <button onClick={onClose} className={styles.close}>
        <Image
          src="/icons/close-outline.svg"
          width="30"
          height="30"
          alt="close"
        />
      </button>
      <div className={styles.container}>
        <div className={styles["rate-container"]}>
          <ul className={styles.list}>
            {rates.map((rate) => (
              <li key={rate} className={styles.item}>
                <button onClick={rateHandler} type="button">
                  {rate}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default RateWindow;
