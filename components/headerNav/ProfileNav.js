import Link from "next/link";
import styles from "./ProfileNav.module.css";
import Image from "next/image";

import ProfileNavItem from "./ProfileNavItem";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "@/store/authSlice";

function ProfileNav() {
  const dispatch = useDispatch();
  const isAuthed = useSelector((state) => state.auth.isAuthed);

  const logoutHandler = function () {
    dispatch(authActions.logout());
  };

  return (
    <li className={styles["profile-item"]}>
      <Image src="/profile.svg" width="30" height="30" alt="profile icon" />
      <Link href="/profile">profile</Link>

      <ul className={styles["profile-list"]}>
        {isAuthed && <ProfileNavItem title="Profile" url="/profile" />}
        {!isAuthed && <ProfileNavItem title="Login" url="/profile/login" />}
        {!isAuthed && (
          <ProfileNavItem title="Create account" url="/profile/register" />
        )}
        {isAuthed && (
          <button onClick={logoutHandler} className={styles.logout}>
            Logout
          </button>
        )}
      </ul>
    </li>
  );
}

export default ProfileNav;
