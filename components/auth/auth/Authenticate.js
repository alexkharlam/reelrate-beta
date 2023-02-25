import MotionReveal from "@/components/ui/MotionReveal";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Authenticate.module.css";
import AuthForm from "./AuthForm";

function Authenticate({ type }) {
  return (
    <MotionReveal>
      <Link className={styles.link} href="/">
        ← to home page
      </Link>
      <Image
        alt="Register background page with cinema theatre"
        className={styles.img}
        src="/cinema2.jpg"
        width="1920"
        height="1080"
      />
      <header className={`${styles.info} container`}>
        <h1>
          {type === "register" ? "Get started with " : "Login to "}
          <span>ReelRate</span>
        </h1>
        <AuthForm type={type} />
      </header>
    </MotionReveal>
  );
}

export default Authenticate;
