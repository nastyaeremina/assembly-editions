import { api } from './ghostAPI';

export async function getBlogPosts() {
  return await api.posts
    .browse({
      limit: 'all',
      include: 'tags',
      order: 'published_at desc'
      // fields: ['reading_time', 'slug', 'title', 'featured', 'feature_image', 'published_at', 'excerpt', 'comment_id']
    })
    .catch((err) => {
      console.error('err', err);
    });
}

export async function getAllBlogWithSlug() {
  return await api.posts
    .browse({
      limit: 'all',
      fields: ['slug']
    })
    .catch((err) => {
      console.error('err', err);
    });
}

export async function getBlogDetail(slug) {
  return await api.posts
    .read({
      slug: slug,
      include: 'tags,authors'
    })
    .catch((err) => {
      console.error('err', err);
    });
}

export async function getAllAuthorWithSlug() {
  return await api.authors
    .browse({
      limit: 'all'
    })
    .catch((err) => {
      console.error('err', err);
    });
}

export async function getBlogByAuthor(authorSlug) {
  return await api.posts
    .browse({
      limit: 'all',
      include: 'tags',
      filter: `authors:[${authorSlug}]`,
      order: 'published_at desc'
    })
    .catch((err) => {
      console.error('err', err);
    });
}

export async function getAllTagWithSlug() {
  return await api.tags
    .browse({
      limit: 'all'
    })
    .catch((err) => {
      console.error('err', err);
    });
}

export async function getBlogByTag(tagSlug) {
  return await api.posts
    .browse({
      limit: 'all',
      include: 'tags',
      filter: `tags:[${tagSlug}]`,
      order: 'published_at desc'
    })
    .catch((err) => {
      console.error('err', err);
    });
}

export async function getTagDetail(slug) {
  return await api.tags
    .read({
      slug: slug
    })
    .catch((err) => {
      console.error('err', err);
    });
}

export async function getAuthorDetail(slug) {
  return await api.authors
    .read({
      slug: slug
    })
    .catch((err) => {
      console.error('err', err);
    });
}
