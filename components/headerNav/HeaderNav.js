import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

import styles from "./HeaderNav.module.css";
import LinkNav from "./LinkNav";
import ProfileNav from "./ProfileNav";

function HeaderNav() {
  const isAuthed = useSelector((state) => state.auth.isAuthed);

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {isAuthed && (
          <LinkNav
            title="collections"
            link="/collections"
            iconPath="/play-outline.svg"
          />
        )}
        {isAuthed && (
          <LinkNav title="rates" link="/rates" iconPath="/star-outline.svg" />
        )}
        <ProfileNav />
      </ul>
    </nav>
  );
}

export default HeaderNav;
