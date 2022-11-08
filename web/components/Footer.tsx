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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel,
            cupiditate?
          </p>
        </div>
        <div className={styles.socials}>
          <h1>Media</h1>
          <div className={styles.socialLinks}>
            <Link href="#" className={styles.socialLink}>
              <img src="../assets/Discord.svg"></img>
            </Link>
            <Link href="#" className={styles.socialLink}>
              <img src="../assets/Email.svg"></img>
            </Link>
            <Link href="#" className={styles.socialLink}>
              <img src="../assets/Github.svg"></img>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
