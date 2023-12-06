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



const sanityClient = require('@sanity/client');

const sanity = sanityClient({
  projectId: "vg1sjyep", // you can find this in sanity.json
  dataset: "production", // or the name you chose in step 1
  token: 'skbSs0iSUolz2IA2RitPkQk5ERWtyZgJhWlQgykE7SAN4GEeK1CgKzIPEI2TUivAbzeWHdOuF1Y4twn2TriZhZ428A3aYvDX1m8ftUbRRwAcgGVxatK40JD4DCLRzBC0Ecb0nInFymd6Gr410Xem5c0q8zd97nK2S8ePpnCPoZGw3QnrIIj3',
  useCdn: false, // `false` if you want to ensure fresh data
});

sanity
  .fetch('*[_type == "post"]')
  .then(posts => {
    console.log('All  posts:', posts)
  })
  .catch(err =>
    console.error('Error fetchingrops: :', err)
  );


// client
//   .fetch('*[_type == "post"]')
//   .then(posts => {
//     console.log('All posts:', posts)
//   })
//   .catch(err => {
//     console.error('Error fetching posts:', err)
//   })
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
  const posts = await sanity.fetch(groq`
      *[_type == "post" && publishedAt < now()]
      { "categories": categories[]->title, ...} 
      | order(publishedAt desc 
)
    `);
  return {
    props: {
      posts,
    },
  };
}

export default Index;
