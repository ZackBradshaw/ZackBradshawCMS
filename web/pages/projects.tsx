import React from "react";
import Link from "next/link";
import urlFor from "../utils/urlfor";
import Card from "../components/Card";
import Layout from "../components/Layout";
import SectionHeader from "../components/SectionHeader";
import styles from "../styles/projects.module.scss";
import groq from "groq";
import client from "../client";

const Projects = ({ posts }) => {
  // console.log("posts", posts);
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
          <SectionHeader title="web-dev" />
          <div className={styles.projects}>
            {posts.length > 0 &&
              posts.map(
                ({
                  _id,
                  title = "",
                  slug = "",
                  body = "",
                  publishedAt = "",
                  categories = "",
                  mainImage = "",
                  projectLink = "",
                }: any) =>
                  slug && (
                    <div className={styles.projects} key={_id}>
                      <Card
                        categories={categories}
                        title={title}
                        img={urlFor(mainImage).url()}
                        description={body}
                        link={projectLink}
                      />
                    </div>
                  )
              )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const posts = await client.fetch(groq`
      
      *[_type == "post" && publishedAt < now()]{ "categories": coalesce(categories[]->title, []), ...} | order(publishedAt desc 
)
    `);
  return {
    props: {
      posts,
    },
  };
}

export default Projects;
