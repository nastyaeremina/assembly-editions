import { PER_UPDATE_PAGE_POST } from '../constants/constant';
import { ghostUpdatesAPI } from './ghostAPI';

export async function getUpdatesPosts({ page }) {
  return await ghostUpdatesAPI.posts
    .browse({
      limit: [PER_UPDATE_PAGE_POST],
      include: 'tags',
      fields: ['slug', 'html', 'published_at'],
      order: 'published_at desc',
      page: [page]
    })
    .catch((err) => {
      console.error('err', err);
    });
}

export async function getUpdateDetail(slug) {
  return await ghostUpdatesAPI.posts
    .read({
      slug: slug
    })
    .catch((err) => {
      console.error('err', err);
    });
}

export async function getUpdatesWithSlug() {
  return await ghostUpdatesAPI.posts
    .browse({
      limit: 'all',
      fields: ['slug']
    })
    .catch((err) => {
      console.error('err', err);
    });
}
