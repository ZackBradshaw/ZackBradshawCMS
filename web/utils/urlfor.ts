import imageUrlbuilder from "@sanity/image-url";
import sanity from "../pages/index"

function urlFor(source: string) {
  return imageUrlbuilder(sanity).image(source);
}

export default urlFor;
