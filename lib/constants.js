export const HOME_OG_IMAGE_URL =
  "https://og-image.vercel.app/Next.js%20Blog%20Starter%20Example.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg";
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

export const CONTENTFUL_SPACE_ID = "4nl05vktay9a";
export const CONTENTFUL_PREVIEW_ACCESS_TOKEN =
  "uPMQ7ecH4zV8VVyt2R0boXgVH7Qk87HKJTY4sOx5k-0";
export const CONTENTFUL_ACCESS_TOKEN =
  "y9MGhCL37u4F4ROQ3kmMeI_JdX_XyolWDmbWaEzPpug";
