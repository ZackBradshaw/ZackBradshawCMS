import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.scss";
import { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

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
        <div className={styles.burger}>
          <Hamburger
            toggled={navbarOpen}
            toggle={setNavbarOpen}
            color="#C778DD"
          >
            <button onClick={handleToggle}></button>
          </Hamburger>
        </div>
      </nav>
      <ul
        className={`${styles.menuNav} ${
          navbarOpen ? styles.open : styles.closed
        }`}
      >
        <li className={styles.navitem} onClick={() => closeMenu()}>
          <Link href="/projects" passHref>
            <div className={styles.link}>
              <span className={styles.itemIcon}>#</span>
              <p>projects</p>
            </div>
          </Link>
        </li>
        <li className={styles.navitem} onClick={() => closeMenu()}>
          <Link href="/#about-me" passHref>
            <div className={styles.link}>
              <span className={styles.itemIcon}>#</span>
              <p>about</p>
            </div>
          </Link>
        </li>
        <li className={styles.navitem} onClick={() => closeMenu()}>
          <Link href="/#contacts" passHref>
            <div className={styles.link}>
              <span className={styles.itemIcon}>#</span>
              <p>contacts</p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
