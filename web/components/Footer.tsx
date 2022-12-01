import Link from "next/link";
import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      <footer className={styles.footerContainer}>
        <div className={styles.contact}>
          <div className={styles.contactInfo}>
            <h1>Zack</h1>
            <h2>zackzbradshaw@gmail.com</h2>
          </div>
        </div>
        <div className={styles.socials}>
          <h1>Media</h1>
          <div className={styles.socialLinks}>
            <Link
              href="https://discord.com/users/159279522603204608"
              className={styles.socialLink}
            >
              <img src="../assets/Discord.svg"></img>
            </Link>
            <Link href="#" className={styles.socialLink}>
              <img src="../assets/Email.svg"></img>
            </Link>
            <Link
              href="https://github.com/ZackBradshaw"
              className={styles.socialLink}
            >
              <img src="../assets/Github.svg"></img>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
