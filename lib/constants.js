export const HOME_OG_IMAGE_URL =
  "/images/opengraph_1200_630.jpg";
/**
 * @desc check does it dev mode or live mode
 * it return false only if its a production build
 */
export const isDev = () => {
  if (process.env.NODE_ENV === "development") {
    return true;
  }
  return false;
};

export const CONTENTFUL_SPACE_ID = "l41zuz9np7js";
export const CONTENTFUL_PREVIEW_ACCESS_TOKEN =
  "ZgkVOC33Z2rxYcGzUwVEKRr05h59HfY4Yo8Q14Y4oN8";
export const CONTENTFUL_ACCESS_TOKEN =
  "SzwToPTvkUQeo7liE28HvSTV1n-q_2ckxZ4KUpwsdA0";

export const NO_OF_JOBS_PER_PAGE = 50;

