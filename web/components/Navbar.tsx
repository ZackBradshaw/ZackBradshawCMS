import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <Link href="/" className={styles.logo}>
          <header>Zack</header>
        </Link>
        <ul className={styles.navitems}>
          <li className={styles.navitem}>
            <Link href="/projects" passHref>
              <span className={styles.itemIcon}>#</span>
              projects
            </Link>
          </li>
          <li className={styles.navitem}>
            <Link href="/#about-me" passHref>
              <span className={styles.itemIcon}>#</span>
              about
            </Link>
          </li>
          <li className={styles.navitem}>
            <Link href="/#contacts" passHref>
              <span className={styles.itemIcon}>#</span>
              contacts
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
