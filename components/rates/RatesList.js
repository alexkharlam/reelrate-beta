import Link from "next/link";
import styles from "./RatesList.module.css";

import RateItem from "./RateItem";

function RatesList({ rates }) {
  let ratesJSX = (
    <div className={styles["message-container"]}>
      <p className={styles.message}>You don't have any rates yet</p>
      <Link className={styles.link} href="/">
        Browse movies
      </Link>
    </div>
  );

  if (rates.length > 0)
    ratesJSX = (
      <>
        <h1 className={styles.heading}>Your rates</h1>
        <ul className={styles["rates-list"]}>
          {rates.map((rate) => (
            <RateItem key={rate.id} rateData={rate} />
          ))}
        </ul>
      </>
    );

  return <main className={styles.main}>{ratesJSX}</main>;
}

export default RatesList;
