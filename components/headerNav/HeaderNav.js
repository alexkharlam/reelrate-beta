import Image from "next/image";
import Link from "next/link";
import React from "react";

import styles from "./HeaderNav.module.css";
import LinkNav from "./LinkNav";
import ProfileNav from "./ProfileNav";

function HeaderNav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <LinkNav
          title="collections"
          link="/collections"
          iconPath="/play-outline.svg"
        />
        <LinkNav title="rates" link="/rates" iconPath="/star-outline.svg" />
        <ProfileNav />
      </ul>
    </nav>
  );
}

export default HeaderNav;
