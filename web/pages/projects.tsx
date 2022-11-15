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
  return (
    <Layout title="Projects | Zack.dev">
      <div className={styles.container}>
        <header className={styles.title}>
          <h1>
            <span>/</span>projects
          </h1>
          <p>List of my projects</p>
        </header>
        <div>
          <h1>Welcome to a blog!</h1>
          {posts.length > 0 &&
            posts.map(
              ({
                _id,
                title = "",
                slug = "",
                publishedAt = "",
                mainImage = "",
              }: any) =>
                slug && (
                  // <li key={_id}>
                  //   <Link href="/post/[slug]" as={`/post/${slug.current}`}>
                  //     <p>{title}</p>
                  //   </Link>{" "}
                  //   ({new Date(publishedAt).toDateString()})
                  // </li>
                  <div className={styles.projects} key={_id}>
                    <Link href="/post/[slug]" as={`/post/${slug.current}`}>
                      <Card
                        tech="React Next TS SCSS"
                        title={title}
                        img={urlFor(mainImage).width(50).url()}
                        description="Example project for testing perposes"
                        button="Live <~>"
                      />
                    </Link>
                  </div>
                )
            )}
        </div>
        <div className={styles.section}>
          <SectionHeader title="web-dev" />
          <div className={styles.projects}>
            <Card
              tech="React Next TS SCSS"
              title="Project Name"
              img="https://via.placeholder.com/299/200"
              description="Example project for testing perposes"
              button="Live <~>"
            />
            <Card
              tech="React Next TS SCSS"
              title="Project Name"
              img="https://via.placeholder.com/300/200"
              description="Example project for testing perposes"
              button="Live <~>"
            />
            <Card
              tech="React Next TS SCSS"
              title="Project Name"
              img="https://via.placeholder.com/300/200"
              description="Example project for testing perposes"
              button="Live <~>"
            />
            <Card
              tech="React Next TS SCSS"
              title="Project Name"
              img="https://via.placeholder.com/300/200"
              description="Example project for testing perposes"
              button="Live <~>"
            />
            <Card
              tech="React Next TS SCSS"
              title="Project Name"
              img="https://via.placeholder.com/300/200"
              description="Example project for testing perposes"
              button="Live <~>"
            />
          </div>
        </div>
        <div className={styles.section}>
          <SectionHeader title="game-dev" />
          <div className={styles.projects}>
            <Card
              tech="React Next TS SCSS"
              title="Project Name"
              img="https://via.placeholder.com/300/200"
              description="Example project for testing perposes"
              button="Live <~>"
            />
            <Card
              tech="React Next TS SCSS"
              title="Project Name"
              img="https://via.placeholder.com/300/200"
              description="Example project for testing perposes"
              button="Live <~>"
            />
            <Card
              tech="React Next TS SCSS"
              title="Project Name"
              img="https://via.placeholder.com/300/200"
              description="Example project for testing perposes"
              button="Live <~>"
            />
            <Card
              tech="React Next TS SCSS"
              title="Project Name"
              img="https://via.placeholder.com/300/200"
              description="Example project for testing perposes"
              button="Live <~>"
            />
            <Card
              tech="React Next TS SCSS"
              title="Project Name"
              img="https://via.placeholder.com/300/200"
              description="Example project for testing perposes"
              button="Live <~>"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const posts = await client.fetch(groq`
      *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
    `);
  return {
    props: {
      posts,
    },
  };
}

export default Projects;
