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
            <Link href="mailto:zack@zackbradshaw.com" className={styles.email}>
              <h2>zack@zackbradshaw.com</h2>
            </Link>
          </div>
        </div>
        <div className={styles.socials}>
          <h1>Media</h1>
          <div className={styles.socialLinks}>
            <Link
              href="https://discord.com/users/159279522603204608"
              className={styles.socialLink}
              target="_blank"
            >
              <img src="../assets/Discord.svg"></img>
            </Link>
            <Link
              href="https://github.com/ZackBradshaw"
              className={styles.socialLink}
              target="_blank"
            >
              <img src="../assets/Github.svg"></img>
            </Link>
            <Link href="tel:4179558082" className={styles.sociallink}>
              <img
                src="../assets/326545_call_phone_icon.svg"
                alt=""
                width={20}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/zack-bradshaw-54898b18a/"
              className={styles.link}
              target="_blank"
            >
              <img src="../assets/Linkedin.svg" alt="" />
            </Link>
            <Link
              href="https://twitter.com/ZackBradshaw10"
              className={styles.link}
              target="_blank"
            >
              <img src="../assets/Twitter.svg" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
