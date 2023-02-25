import { useRate } from "@/utils/hooks/use-rate";
import { useSelector } from "react-redux";
import styles from "./Rate.module.css";

function Rate({ movieData }) {
  const auth = useSelector((state) => state.auth);
  const { id, imgPath, title } = movieData;
  const { sendRequest } = useRate();

  const rateHandler = async function (e) {
    sendRequest({ rate: e.target.textContent, title, id, imgPath });
  };

  const rates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const jsxRates = rates.map((rate) => (
    <button key={rate} onClick={rateHandler} className={styles["rate-button"]}>
      {rate}
    </button>
  ));

  return (
    <div>
      <div className={styles.text}>
        <img src="/star-outline.svg" alt="star (rate) icon" />
        <p>Rate this movie</p>
      </div>
      <div className={styles.rates}>{jsxRates}</div>
    </div>
  );
}

export default Rate;
