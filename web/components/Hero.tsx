import React from "react";
import styles from "./Hero.module.scss";
import ASCIIBox from "./ASCIIBox";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <div className={styles.info}>
          <h1>
            Hi i'm Zack i <span>enjoy</span> doing <span>difficult</span> things
          </h1>
        </div>

        <button className={styles.button}>Contact me !!</button>
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
