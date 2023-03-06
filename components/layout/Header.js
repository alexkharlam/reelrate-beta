import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";

import SearchInput from "../header/headerSearch/SearchInput";
import HeaderNav from "../header/headerNavigation/HeaderNav";
import MobileHeader from "./MobileHeader";

function Header() {
  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <Link href="/" className={styles["img-container"]}>
            <Image
              src="/img/logo.svg"
              width="223"
              height="109"
              alt="reelrate logo"
            />
          </Link>
          <div className={styles.search}>
            <SearchInput />
          </div>
          <HeaderNav />
        </header>
      </div>
      <div className={styles["mobile-container"]}>
        <MobileHeader />
      </div>
    </>
  );
}

export default Header;
