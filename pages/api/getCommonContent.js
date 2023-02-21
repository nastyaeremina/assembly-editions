// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { TOP_BAR_CONTENT_ID } from '../../constants/constant';
import { getSitemap } from '../../lib/contentful-sitemap';

export default async function handler(req, res) {
  const data = (await getSitemap(TOP_BAR_CONTENT_ID)) ?? '';
  res.status(200).json({ data });
}
