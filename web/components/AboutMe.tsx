import React from "react";
import SectionHeader from "./SectionHeader";
import ASSCIIBox from "./ASCIIBox";
import styles from "./AboutMe.module.scss";

const AboutMe = () => {
  return (
    <div id="about-me" className={styles.container}>
      <div className={styles.info}>
        <SectionHeader title="about-me" />
        <h1 className={styles.intro}>I'm Zack</h1>
        <h2>I'm self motivated</h2>
        <p>
          I co-organize opensgf a Code For America brigade group of volunteer
          coders and designers dedicated to building websites and web apps for
          nonprofit organizations
        </p>
        <p>
          I teach unreal game development virtually on mondays and thursdays{" "}
        </p>
        <p>
          I particate in game jams biannually were i have 5 days to create a
          game (usually in unreal)
        </p>
        <h2>I'm self taught</h2>
        <p>
          I dislike the term 'self-taught' I'm using it here so there is no
          confusion on whether or not I attended university however I have
          learned from the many coders I know as well as countless kind coders
          on the internet
        </p>
      </div>
      <div className={styles.art}></div>
    </div>
  );
};

export default AboutMe;
