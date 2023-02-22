import styles from "./ProgressBar.module.css";

function ProgressBar() {
  return (
    <>
      <div className={styles.bar}></div>
      <div className={styles.line}></div>
    </>
  );
}

export default ProgressBar;
