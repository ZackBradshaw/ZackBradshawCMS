import React from "react";
import Card from "./Card";
import styles from "./ProjectsPrev.module.scss";
import Link from "next/link";
import SectionHeader from "./SectionHeader";

const ProjectsPrev = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <SectionHeader title="projects" />
          <Link href="projects" className={styles.viewAll}>
            View all ~~{">"}
          </Link>
        </div>
      </div>
      <div className={styles.projects}>
        <Card
          tech="React Next TS SCSS"
          title="Project Name"
          img="https://via.placeholder.com/300/200"
          description="Example project for testing perposes"
          button="Live <~>"
          hidden={false}
        />
        <Card
          tech="React Next TS SCSS"
          title="Project Name"
          img="https://via.placeholder.com/300/200"
          description="Example project for testing perposes"
          button="Live <~>"
          hidden={false}
        />
        <Card
          tech="React Next TS SCSS"
          title="Project Name"
          img="https://via.placeholder.com/300/200"
          description="Example project for testing perposes"
          button="Live <~>"
          hidden={false}
        />
      </div>
    </>
  );
};

export default ProjectsPrev;
