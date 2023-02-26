import Link from "next/link";
import Image from "next/image";
import styles from "./HeaderNavLink.module.css";

function HeaderNavLink({ title, link, iconPath }) {
  return (
    <li className={styles.item}>
      <Link className={styles["nav-link"]} href={link}>
        <Image src={iconPath} width="30" height="30" alt={`${title} icon`} />
        <p>{title}</p>
      </Link>
    </li>
  );
}

export default HeaderNavLink;
