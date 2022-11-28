import Link from "next/link";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import ProjectsPrev from "../components/ProjectsPrev";
import Quote from "../components/Quote";
import Skills from "../components/Skills";
import AboutMe from "../components/AboutMe";
import styles from "../styles/Home.module.scss";
import Contacts from "../components/Contacts";
import client from "../client";
import groq from "groq";

const Index = ({ posts }) => (
  <Layout title="Home | Zack.dev">
    <Hero />
    <Quote />
    {/* <ProjectsPrev posts={posts} /> */}
    <Skills />
    <AboutMe />
    <Contacts />
  </Layout>
);

export async function getStaticProps() {
  const posts = await client.fetch(groq`
      
      *[_type == "post" && publishedAt < now()]{ "catagories": catagories[]->title, ...} | order(publishedAt desc 
)
    `);

  return {
    props: {
      posts,
    },
  };
}

export default Index;
