import Image from "next/image";
import Link from "next/link";
import React from "react";

import styles from "./HeaderNav.module.css";

function HeaderNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.item}>
          <Link href="/collections">
            <Image
              alt="reelrate logo"
              src="/play-outline.svg"
              width="30"
              height="30"
            />
            <p>collections</p>
          </Link>
        </li>

        <li className={styles.item}>
          <Link href="/rates">
            <Image src="/star-outline.svg" width="30" height="30" />
            <p>rates</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNav;
