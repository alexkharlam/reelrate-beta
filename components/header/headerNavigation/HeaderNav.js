import styles from "./HeaderNav.module.css";

import HeaderNavLink from "./HeaderNavLink";

function HeaderNav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <HeaderNavLink
          title="collections"
          link="/collections"
          iconPath="/play-outline.svg"
        />
        <HeaderNavLink
          title="rates"
          link="/rates"
          iconPath="/star-outline.svg"
        />
      </ul>
    </nav>
  );
}

export default HeaderNav;
