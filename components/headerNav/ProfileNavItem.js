import Link from "next/link";
import styles from "./ProfileNavItem.module.css";

function ProfileNavItem({ title, url }) {
  return (
    <li>
      <Link className={styles["profile-link"]} href={url}>
        {title}
      </Link>
    </li>
  );
}

export default ProfileNavItem;
