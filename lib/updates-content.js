import { ghostUpdatesAPI } from './ghostAPI';

export async function getUpdatesPosts() {
  return await ghostUpdatesAPI.posts
    .browse({
      limit: 'all',
      include: 'tags',
      fields: ['slug', 'html', 'published_at']
    })
    .catch((err) => {
      console.error('err', err);
    });
}
