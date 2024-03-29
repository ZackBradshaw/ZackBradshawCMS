import Link from "next/link";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import ProjectsPrev from "../components/ProjectsPrev";
import Quote from "../components/Quote";
import Skills from "../components/Skills";
import AboutMe from "../components/AboutMe";
import styles from "../styles/Home.module.scss";
import Contacts from "../components/Contacts";
import groq from "groq";
import { IPost } from "../interfaces/IPost";
import client from "../client";

const Index = ({ posts }: { posts: IPost[] }) => {
  console.log("posts", posts);
  return (
    <Layout title="Home | Zack.dev">
      <Hero />
      <Quote />
      <ProjectsPrev posts={posts} />
      <Skills />
      <AboutMe />
      <Contacts />
    </Layout>
  );
};

export async function getStaticProps() {
  const posts = await client.fetch(groq`
      *[_type == "post" && publishedAt < now()]
      { "categories": categories[]->title, ...} 
      | order(publishedAt desc)
    `);
  return {
    props: {
      posts,
    },
  };
}

export default Index;
