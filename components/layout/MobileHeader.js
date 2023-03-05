import styles from "./MobileHeader.module.css";
import Image from "next/image";
import Link from "next/link";

function MobileHeader() {
  return (
    <header className={styles.header}>
      <Image src="img/logo.svg" width="64" height="64" alt="ReelRate logo" />
      <nav>
        <ul>
          <li className={styles.li}>
            <Link className={styles.link} href="/rates">
              <Image
                className={styles.icon}
                src="icons/star-outline.svg"
                width="32"
                height="32"
                alt="rates"
              />
              <p>Rates</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MobileHeader;
