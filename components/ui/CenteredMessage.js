import styles from "./CenteredMessage.module.css";

import { motion } from "framer-motion";
function CenteredMessage({ message }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={styles.message}
    >
      {message}
    </motion.div>
  );
}

export default CenteredMessage;
