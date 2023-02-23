import Image from "next/image";
import React from "react";
import styles from "./Register.module.css";

function Register() {
  return (
    <>
      <Image
        className={styles.img}
        src="/cinema2.jpg"
        width="1920"
        height="1080"
      />
      <header className={`${styles.info} container`}>
        <h1>
          Get started with <span>ReelRate</span>
        </h1>
      </header>
    </>
  );
}

export default Register;
