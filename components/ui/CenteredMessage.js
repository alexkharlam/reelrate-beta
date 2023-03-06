import styles from "./CenteredMessage.module.css";

function CenteredMessage({ message }) {
  return <div className={styles.message}>{message}</div>;
}

export default CenteredMessage;
