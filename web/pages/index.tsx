import Link from "next/link";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import ProjectsPrev from "../components/ProjectsPrev";
import Quote from "../components/Quote";
import Skills from "../components/Skills";
import AboutMe from "../components/AboutMe";
import styles from "../styles/Home.module.scss";
import Contacts from "../components/Contacts";

const IndexPage = () => (
  <Layout title="Home | Zack.dev">
    <Hero />
    <Quote />
    <ProjectsPrev />
    <Skills />
    <AboutMe />
    <Contacts />
  </Layout>
);

export default IndexPage;
