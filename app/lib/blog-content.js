import { api } from './ghostAPI';

export async function getBlogPosts() {
  try {
    return await api.posts.browse({
      limit: 'all',
      include: 'tags,authors',
      order: 'published_at desc',
      filter: `visibility:public`

      // fields: ['reading_time', 'slug', 'title', 'featured', 'feature_image', 'published_at', 'excerpt', 'comment_id']
    });
  } catch (err) {
    console.error('Error fetching blog posts:', err);
    return [];
  }
}

export async function getAllBlogWithSlug() {
  try {
    return await api.posts.browse({
      limit: 'all',
      fields: ['slug']
    });
  } catch (err) {
    console.error('Error fetching blog slugs:', err);
    return [];
  }
}

export async function getBlogDetail(slug) {
  try {
    return await api.posts.read({
      slug: slug,
      include: 'tags,authors'
    });
  } catch (err) {
    console.error('Error fetching blog detail:', err);
    return null;
  }
}

export async function getAllAuthorWithSlug() {
  try {
    return await api.authors.browse({
      limit: 'all'
    });
  } catch (err) {
    console.error('Error fetching authors:', err);
    return [];
  }
}

export async function getBlogByAuthor(authorSlug) {
  try {
    return await api.posts.browse({
      limit: 'all',
      include: 'tags,authors',
      filter: `authors:[${authorSlug}]`,
      order: 'published_at desc'
    });
  } catch (err) {
    console.error('Error fetching blogs by author:', err);
    return [];
  }
}

export async function getAllTagWithSlug() {
  try {
    return await api.tags.browse({
      limit: 'all',
      filter: 'visibility:public'
    });
  } catch (err) {
    console.error('Error fetching tags:', err);
    return [];
  }
}

export async function getBlogByTag(tagSlug) {
  try {
    return await api.posts.browse({
      limit: 'all',
      include: 'tags,authors',
      filter: `tags:[${tagSlug}]`,
      order: 'published_at desc'
    });
  } catch (err) {
    console.error('Error fetching blogs by tag:', err);
    return [];
  }
}

export async function getTagDetail(slug) {
  try {
    return await api.tags.read({
      slug: slug
    });
  } catch (err) {
    console.error('Error fetching tag detail:', err);
    return null;
  }
}

export async function getAuthorDetail(slug) {
  try {
    return await api.authors.read({
      slug: slug
    });
  } catch (err) {
    console.error('Error fetching author detail:', err);
    return null;
  }
}
