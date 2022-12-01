import Link from "next/link";
import React from "react";
import SectionHeader from "./SectionHeader";
import styles from "./Contacts.module.scss";

const Contacts = () => {
  return (
    <div id="contacts" className={styles.container}>
      <SectionHeader title="contacts" />
      <div className={styles.content}>
        <p>
          Here are my prefered forms of communication im intrested in listening
          to any opportunities and or questions you may have for me
        </p>
        <div className={styles.contactInfo}>
          <h1>Message me here</h1>
          <Link
            href="https://discord.com/users/159279522603204608"
            className={styles.link}
            target="_blank"
          >
            <img src="../assets/Discord.svg" alt="" />
            <h2>zackbradshaw#7647</h2>
          </Link>
          <div className={styles.link}>
            <img src="../assets/Email.svg" alt="" />
            <h2>Zackzbradshaw@gmail.com</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
