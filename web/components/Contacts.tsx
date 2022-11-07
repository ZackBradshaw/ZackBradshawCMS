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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, fugit
          doloribus, ducimus iusto voluptatum rem hic tempora, maiores molestiae
          corporis quos? Ipsa corrupti maiores sit quidem fugiat pariatur earum
          magnam.
        </p>
        <div className={styles.contactInfo}>
          <h1>Message me here</h1>
          <Link href="#" className={styles.link}>
            <img src="../assets/Discord.svg" alt="" />
            <h2>zackbradshaw#7647</h2>
          </Link>
          <Link href="#" className={styles.link}>
            <img src="../assets/Email.svg" alt="" />
            <h2>Zackzbradshaw@gmail.com</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
