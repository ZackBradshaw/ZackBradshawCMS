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
          <div className={styles.column}>
            <div className={styles.card}>
              <h1>FrameWorks/Middleware</h1>
              <p>React, Next, Express, Mongodb, Mongoose, Pug, Sanity</p>
            </div>
            <div className={styles.card}>
              <h1>Favorite Tools</h1>
              <p>
                Unreal, Blender, Photoshop, VSCode, Rider, Neovim, WSL,
                Terminal, FishCL
              </p>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.card}>
              <h1>Languages</h1>
              <p>Typescript, Javascript, CSS, SCSS, Unreal Blueprints</p>
            </div>
            <div className={styles.card}>
              <h1>Other</h1>
              <p>HTML MQL </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
