import React from "react";
import SectionHeader from "./SectionHeader";
import ASSCIIBox from "./ASCIIBox";
import styles from "./AboutMe.module.scss";

const AboutMe = () => {
  return (
    <div id="about-me" className={styles.container}>
      <div className={styles.info}>
        <SectionHeader title="about-me" />
        <h1 className={styles.intro}>Hello i'm Zack</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid et
          quas omnis ratione voluptatibus at beatae quo a! Exercitationem
          repellendus, adipisci odit qui eos aspernatur labore similique a.
          Molestias, quam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ullam ea
          repellendus alias sit. Dolore, optio qui. Porro, qui sint.
        </p>
      </div>
      <div className={styles.art}></div>
    </div>
  );
};

export default AboutMe;
