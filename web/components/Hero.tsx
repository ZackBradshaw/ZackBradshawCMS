import React from "react";
import styles from "./Hero.module.scss";
import ASCIIBox from "./ASCIIBox";
import Link from "next/link";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <div className={styles.info}>
          <h1>
            Hi I'm Zack I <span>enjoy</span> doing <span>difficult</span> things
          </h1>
        </div>

        <Link href="/#contacts" className={styles.button}>
          Contact me !!
        </Link>
      </div>
      <div className={styles.profile}>
        <span className={styles.photo}>¯\_(ツ)_/¯</span>
        <ASCIIBox>
          <h2 className={styles.status}>
            Currently working on <span>Portfolio</span>
          </h2>
        </ASCIIBox>
      </div>
    </div>
  );
};

export default Hero;
