import imageUrlbuilder from "@sanity/image-url";
import client from "../client";

function urlFor(source: string) {
  return imageUrlbuilder(client).image(source);
}

export default urlFor;