import { ghostUpdatesAPI } from './ghostAPI';

export async function getUpdatesPosts() {
  return await ghostUpdatesAPI.posts
    .browse({
      limit: 'all',
      include: 'tags',
      fields: ['slug', 'html', 'published_at'],
      order: 'published_at desc'
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
