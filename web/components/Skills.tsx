import React from "react";
import Card from "./Card";
import SectionHeader from "./SectionHeader";
import styles from "./Skills.module.scss";

const Skills = () => {
  return (
    <div className={styles.container}>
      <SectionHeader title="skills" />
      <div className={styles.content}>
        <div className={styles.art}></div>
        <div className={styles.skills}>
          <div className={styles.card}>
            <h1>Tech Name</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              possimus!
            </p>
          </div>
          <div className={styles.column}>
            <div className={styles.card}>
              <h1>Tech Name</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis, possimus!
              </p>
            </div>
            <div className={styles.card}>
              <h1>Tech Name</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis, possimus!
              </p>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.card}>
              <h1>Tech Name</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis, possimus!
              </p>
            </div>
            <div className={styles.card}>
              <h1>Tech Name</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis, possimus!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
