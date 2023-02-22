import Link from "next/link";
import React from "react";
import Image from "next/image";
import styles from "./Header.module.css";

import SearchInput from "../headerSearch/SearchInput";
import HeaderNav from "../headerNav/HeaderNav";

function Header() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/" className={styles["img-container"]}>
          <Image src="/logo.svg" width="223" height="109" alt="reelrate logo" />
        </Link>
        <SearchInput />
        <HeaderNav />
      </header>
    </div>
  );
}

export default Header;
