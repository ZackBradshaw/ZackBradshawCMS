import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from 'next-link';
import Card from "./Card";
import SectionHeader from "./SectionHeader";
import styles from "./Skills.module.scss";

const Skills = () => {
  const [currentEmbed, setCurrentEmbed] = useState("https://wakatime.com/share/@ZackBradshaw/895ffbb8-81cf-4d6b-ab9c-1a9397967c0f.svg");
  const [projects, setProjects] = useState([])

  const handleLinkClick = (newEmbedUrl) => {
    setCurrentEmbed(newEmbedUrl);
  };

  // TODO debug
  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     const response = await axios.get("/api/projects");
  //     setProjects(response.data.data);
  //   };
  //   fetchProjects();
  // }, []);

  return (
    <>
      <SectionHeader title="stats" />
      <div className={styles.skills}>
        <a className={styles.link} onClick={() => handleLinkClick("https://wakatime.com/share/@ZackBradshaw/78a5afd7-31a1-4aac-9f66-9255557da513.svg")}>
          <span>#</span>Weekly Coding
        </a>
        <a className={styles.link} onClick={() => handleLinkClick("https://wakatime.com/share/@ZackBradshaw/03be0453-5d08-4ae2-98dc-fea191249251.svg")}>
          <span>#</span>Languages
        </a>
        <a className={styles.link} onClick={() => handleLinkClick("https://wakatime.com/share/@ZackBradshaw/c54258af-bb5e-40ef-aa1a-aa74f1a73f14.svg")}>
          <span>#</span>Editors
        </a >
        <a className={styles.link} onClick={() => handleLinkClick("https://wakatime.com/share/@ZackBradshaw/72f2f246-c00d-4566-ae66-9c8fa8b551dd.svg")}>
          <span>#</span>OS
        </a >
        <a className={styles.link} onClick={() => handleLinkClick("https://wakatime.com/share/@ZackBradshaw/89040f6d-e70b-45cc-b209-8d8d953bd242.svg")}>
          <span>#</span>Categories
        </a >
        <a className={styles.link} onClick={() => handleLinkClick("https://wakatime.com/share/@ZackBradshaw/8e8df90d-eff1-4ec7-8fea-f7f04a9c6680.svg")}>
          <span>#</span>Total Coding
        </a >
      </div>
      <div>
        {/* {projects.map((project) => (
          <div key={project.id}>
            <a href={project.url} >
              <pre>{`</${project.name} ${project.badge}/>`}</pre>
            </a>
          </div>
        ))} */}
      </div>
      <figure><embed src={currentEmbed}></embed></figure>
    </>
  );
};

export default Skills;
