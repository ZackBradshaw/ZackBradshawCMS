import React from "react";
import Card from "./Card";
import styles from "./ProjectsPrev.module.scss";
import Link from "next/link";
import SectionHeader from "./SectionHeader";
import urlFor from "../utils/urlfor";
import { IPost } from "../interfaces/IPost";

const ProjectsPrev = (props: { posts: IPost[] }) => {
  const posts = props.posts;

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
            (post: IPost) =>
              post.slug && (
                <div className={styles.projects} key={post._id}>
                  <Card
                    categories={post.categories}
                    title={post.title}
                    img={urlFor(post.mainImage.asset._ref).url()}
                    description={post.body}
                    link={post.projectLink}
                  />
                </div>
              )
          )}
      </div>
    </>
  );
};

export default ProjectsPrev;
