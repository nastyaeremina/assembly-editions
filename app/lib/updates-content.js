import { PER_UPDATE_PAGE_POST } from '../constants/constant';
import { ghostUpdatesAPI } from './ghostAPI';

export async function getUpdatesPosts({ page }) {
  try {
    return await ghostUpdatesAPI.posts
      .browse({
        limit: [PER_UPDATE_PAGE_POST],
        include: 'tags',
        fields: ['slug', 'html', 'published_at'],
        order: 'published_at desc',
        page: [page]
      });
  } catch (err) {
    console.error('Error fetching updates posts:', err);
    return [];
  }
}

export async function getUpdateDetail(slug) {
  try {
    return await ghostUpdatesAPI.posts
      .read({
        slug: slug
      });
  } catch (err) {
    console.error('Error fetching update detail:', err);
    return null;
  }
}

export async function getUpdatesWithSlug() {
  try {
    return await ghostUpdatesAPI.posts
      .browse({
        limit: 'all',
        fields: ['slug']
      });
  } catch (err) {
    console.error('Error fetching updates with slug:', err);
    return [];
  }
}
