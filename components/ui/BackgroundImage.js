import React from "react";
import Image from "next/image";
import styles from "./BackgroundImage.module.css";

function BackgroundImage({ src }) {
  return (
    <>
      <Image className={styles.image} src={src} width="1000" height="700" />
      <div className={styles.filter} />
    </>
  );
}

export default BackgroundImage;
