import { api } from './ghostAPI';

export async function getBlogPosts() {
  return await api.posts
    .browse({
      limit: 'all',
      include: 'tags'
    })
    .catch((err) => {
      console.error('err', err);
    });
}
