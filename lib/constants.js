export const HOME_OG_IMAGE_URL = '/images/opengraph_1200_630.jpg';
/**
 * @desc check does it dev mode or live mode
 * it return false only if its a production build
 */
export const isDev = () => {
  if (process.env.NODE_ENV === 'development') {
    return true;
  }
  return false;
};

export const NO_OF_JOBS_PER_PAGE = 50;
