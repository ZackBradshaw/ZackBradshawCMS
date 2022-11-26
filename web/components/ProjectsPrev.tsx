import React from "react";
import Card from "./Card";
import styles from "./ProjectsPrev.module.scss";
import Link from "next/link";
import SectionHeader from "./SectionHeader";
import urlFor from "../utils/urlfor";

const ProjectsPrev = ({ posts }) => {
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
        {posts.length > 0 &&
          posts.slice(0, 3).map(
            ({
              _id,
              title = "",
              slug = "",
              body = "",
              publishedAt = "",
              categories = "",
              mainImage = "",
            }: any) =>
              slug && (
                <div className={styles.projects} key={_id}>
                  <Card
                    categories={categories}
                    title={title}
                    img={urlFor(mainImage).url()}
                    description={body}
                  />
                </div>
              )
          )}
      </div>
    </>
  );
};

export default ProjectsPrev;
