import React from "react";
import Layout from "../components/Layout";
import SectionHeader from "../components/SectionHeader";
import styles from "../styles/projects.module.scss";
import groq from "groq";
import sanity from "./index";
import { PostsList } from "../components/PostsList";

const Projects = ({ posts }) => {

  return (
    <Layout title="Projects | Zack.dev">
      <div className={styles.container}>
        <header className={styles.title}>
          <h1>
            <span>/</span>projects
          </h1>
          <p>List of my projects</p>
        </header>
        <div className={styles.section}>
          <div className={styles.projects}>
            <SectionHeader title="web-dev" />
            <PostsList posts={posts} tag="Web Dev" />
          </div>
          <div className={styles.projects}>
            <SectionHeader title="game-dev" />
            <PostsList posts={posts} tag="Game Dev" />
          </div>
          <div className={styles.projects}>
            <SectionHeader title="art" />
            <PostsList posts={posts} tag="Art" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const posts = await sanity.fetch(groq`
    *[_type == "post" && publishedAt < now()]{ "categories": coalesce(categories[]->title, []), ...} | order(publishedAt desc)
  `);
  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
}
export default Projects;
