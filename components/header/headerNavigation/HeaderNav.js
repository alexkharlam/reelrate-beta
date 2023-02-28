import styles from "./HeaderNav.module.css";

import HeaderNavLink from "./HeaderNavLink";

function HeaderNav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <HeaderNavLink
          title="watch list"
          link="/watch-list"
          iconPath="/icons/play-outline.svg"
        />
        <HeaderNavLink
          title="rates"
          link="/rates"
          iconPath="/icons/star-outline.svg"
        />
      </ul>
    </nav>
  );
}

export default HeaderNav;
