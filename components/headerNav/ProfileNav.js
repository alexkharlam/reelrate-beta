import Link from "next/link";
import styles from "./ProfileNav.module.css";
import Image from "next/image";

import ProfileNavItem from "./ProfileNavItem";
import { useSelector } from "react-redux";

function ProfileNav() {
  const isAuthed = useSelector((state) => state.auth.isAuthed);

  return (
    <li className={styles["profile-item"]}>
      <Image src="/profile.svg" width="30" height="30" alt="profile icon" />
      <Link href="/profile">profile</Link>

      <ul className={styles["profile-list"]}>
        {isAuthed && <ProfileNavItem title="Profile" url="/profile" />}
        <ProfileNavItem title="Login" url="/profile/login" />
        <ProfileNavItem title="Create account" url="/profile/register" />
        {isAuthed && <ProfileNavItem title="Logout" url="/" />}
      </ul>
    </li>
  );
}

export default ProfileNav;
