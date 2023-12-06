import imageUrlBuilder from "@sanity/image-url";
import sanity from "../client";

const builder = imageUrlBuilder(sanity);

export default function urlFor(source) {
  return builder.image(source);
}
