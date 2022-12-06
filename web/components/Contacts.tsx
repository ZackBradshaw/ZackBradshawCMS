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
          <Link
            href="https://twitter.com/ZackBradshaw10"
            className={styles.link}
            target="_blank"
          >
            <img src="../assets/Twitter.svg" />
            <h2>@ZackBradshaw10</h2>
          </Link>
          <Link
            href="https://www.linkedin.com/in/zack-bradshaw-54898b18a/"
            className={styles.link}
            target="_blank"
          >
            <img src="../assets/Linkedin.svg" alt="" />
            <h2>Zack Bradshaw</h2>
          </Link>

          <Link href="mailto:zack@zackbradshaw.com" className={styles.link}>
            <img src="../assets/Email.svg" alt="" />
            <h2>zack@zackbradshaw.com</h2>
          </Link>
          <Link href="tel:4179558082" className={styles.link}>
            <img src="../assets/326545_call_phone_icon.svg" alt="" width={25} />
            <h2>417-955-8082</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
