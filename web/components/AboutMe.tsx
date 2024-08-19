import React from "react";
import SectionHeader from "./SectionHeader";
import styles from "./AboutMe.module.scss";

const AboutMe = () => {
  return (
    <div id="about-me" className={styles.container}>
      <div className={styles.info}>
        <SectionHeader title="about-me" />
      </div>
    </div>
  );
};

export default AboutMe;
