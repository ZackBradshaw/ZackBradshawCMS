import { IPost } from "../interfaces/IPost";
import Card from "./Card";
import urlFor from "../utils/urlfor";

export interface IPostsListProps {
  posts?: IPost[];
  tag?: string;
}

export const PostsList = ({ posts = [], tag }: any) => {
  const filteredPosts = tag
    ? posts.filter((post) => post.categories.includes(tag))
    : posts;

  console.log(filteredPosts);

  return (
    <>
      {filteredPosts.map((post) => (
        <PostCard post={post} key={`${tag} ${post._id}`} />
      ))}
    </>
  );
};

export const PostCard = ({ post }: any) => {
  const {
    _id,
    title = "",
    slug = "",
    body = "",
    publishedAt = "",
    categories = "",
    mainImage = "",
    projectLink = "",
  } = post;
  return (
    slug && (
      <Card
        categories={categories}
        title={title}
        img={urlFor(mainImage).url()}
        description={body}
        link={projectLink}
      />
    )
  );
};
