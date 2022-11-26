import groq from "groq";
import imageUrlbuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import urlFor from "../../utils/urlfor";
// [slug].js
import React from "react";
import getYouTubeId from "get-youtube-id";
import YouTube from "react-youtube";

const serializers = {
  types: {
    youtube: ({ node }) => {
      const { url } = node;
      const id = getYouTubeId(url);
      return <YouTube videoId={id} />;
    },
  },
};

import client from "../../client";
interface IPost {
  title?: string;
  name?: string;
  categories?: string[];
  authorImage?: any;
  body?: any;
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <img
          alt={value.alt || " "}
          loading="lazy"
          src={
            urlFor(value)
              .width(320)
              .height(240)
              .fit("max")
              .auto("format") as unknown as string
          }
        />
      );
    },
  },
};

const Post = (props: { post?: IPost }) => {
  console.log(props);
  const post: IPost = props.post ?? {
    title: "Missing title",
  };
  return (
    <article>
      <h1>{post.title ?? "missing title"}</h1>
      <span>By {post.name ?? "missing author"}</span>
      {post.categories && (
        <ul>
          Posted
          {post.categories.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>
      )}
      {post.authorImage && (
        <div>
          <img src={urlFor(post.authorImage).width(50).url()} />
        </div>
      )}
      <PortableText value={post.body} components={ptComponents} />
    </article>
  );
};

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body
}`;

export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const post = await client.fetch(query, { slug });
  return {
    props: {
      post,
    },
  };
}

export default Post;
