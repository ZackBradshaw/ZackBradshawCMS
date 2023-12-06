import React, { useState } from "react";
import Link from 'next-link';
import Card from "./Card";
import SectionHeader from "./SectionHeader";
import styles from "./Skills.module.scss";

const Skills = () => {
  const [currentEmbed, setCurrentEmbed] = useState("https://wakatime.com/share/@ZackBradshaw/895ffbb8-81cf-4d6b-ab9c-1a9397967c0f.svg");

  const handleLinkClick = (newEmbedUrl, event) => {
    event.preventDefault();
    setCurrentEmbed(newEmbedUrl);
  };

  return (
    <>
      <SectionHeader title="stats" />
      <div className={styles.skills}>
        <figure><embed src={currentEmbed} key={currentEmbed}></embed></figure>
        <a href="#" className={styles.link} onClick={(event) => handleLinkClick("https://wakatime.com/share/@ZackBradshaw/78a5afd7-31a1-4aac-9f66-9255557da513.svg", event)}>
          <span>#</span>Weekly Coding
        </a>
        <a href="#" className={styles.link} onClick={(event) => handleLinkClick("https://wakatime.com/share/@ZackBradshaw/03be0453-5d08-4ae2-98dc-fea191249251.svg", event)}>
          <span>#</span>Embed 2
        </a>
        <a href="#" className={styles.link} onClick={(event) => handleLinkClick("https://wakatime.com/share/@ZackBradshaw/c54258af-bb5e-40ef-aa1a-aa74f1a73f14.svg", event)}>
          <span>#</span>Embed 3
        </a >
        <a href="#" className={styles.link} onClick={(event) => handleLinkClick("https://wakatime.com/share/@ZackBradshaw/72f2f246-c00d-4566-ae66-9c8fa8b551dd.svg", event)}>
          <span>#</span>Embed 4
        </a >
        <a href="#" className={styles.link} onClick={(event) => handleLinkClick("https://wakatime.com/share/@ZackBradshaw/89040f6d-e70b-45cc-b209-8d8d953bd242.svg", event)}>
          <span>#</span>Embed 5
        </a >
      </div>
    </>
  );
};

export default Skills;
