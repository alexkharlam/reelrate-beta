import Link from "next/link";
import styles from "./ProfileNav.module.css";
import Image from "next/image";

import ProfileNavItem from "./ProfileNavItem";

function ProfileNav() {
  return (
    <li className={styles["profile-item"]}>
      <Image src="/profile.svg" width="30" height="30" alt="profile icon" />
      <Link href="/profile">profile</Link>

      <ul className={styles["profile-list"]}>
        <ProfileNavItem title="Profile" url="/profile" />
        <ProfileNavItem title="Login" url="/profile/login" />
        <ProfileNavItem title="Create account" url="/profile/register" />
        <ProfileNavItem title="Logout" url="/" />
      </ul>
    </li>
  );
}

export default ProfileNav;
