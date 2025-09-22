import { api } from './ghostAPI';
import { unstable_cache } from 'next/cache';

export const getBlogPosts = unstable_cache(
  async ({ page = 1, limit = 8, filter = 'visibility:public' } = {}) => {
    try {
      return await api.posts.browse({
        limit: limit,
        page: page,
        include: 'tags,authors',
        order: 'published_at desc',
        filter: filter
      });
    } catch (err) {
      console.error('Error fetching blog posts:', err);
      return [];
    }
  },
  ['blog-posts'],
  {
    revalidate: 300, // 5 minutes - same as page revalidate
    tags: ['blog', 'posts']
  }
);

// Keep the old function for backward compatibility but mark as deprecated
export async function getAllBlogPosts() {
  try {
    return await api.posts.browse({
      limit: 'all',
      include: 'tags,authors',
      order: 'published_at desc',
      filter: `visibility:public`
      // Removed fields array - let Ghost return all available fields
    });
  } catch (err) {
    console.error('Error fetching all blog posts:', err);
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

export const getBlogByAuthor = unstable_cache(
  async (authorSlug, { page = 1, limit = 8 } = {}) => {
    try {
      return await api.posts.browse({
        limit: limit,
        page: page,
        include: 'tags,authors',
        filter: `authors:[${authorSlug}]`,
        order: 'published_at desc'
      });
    } catch (err) {
      console.error('Error fetching blogs by author:', err);
      return [];
    }
  },
  ['blog-posts-by-author'],
  {
    revalidate: 300, // 5 minutes
    tags: ['blog', 'posts', 'authors']
  }
);

export const getAllTagWithSlug = unstable_cache(
  async () => {
    try {
      return await api.tags.browse({
        limit: 'all',
        filter: 'visibility:public'
      });
    } catch (err) {
      console.error('Error fetching tags:', err);
      return [];
    }
  },
  ['blog-tags'],
  {
    revalidate: 3600, // 1 hour - tags change less frequently
    tags: ['blog', 'tags']
  }
);

export const getBlogByTag = unstable_cache(
  async (tagSlug, { page = 1, limit = 8 } = {}) => {
    try {
      return await api.posts.browse({
        limit: limit,
        page: page,
        include: 'tags,authors',
        filter: `tags:[${tagSlug}]`,
        order: 'published_at desc'
        // Removed fields array - let Ghost return all available fields
      });
    } catch (err) {
      console.error('Error fetching blogs by tag:', err);
      return [];
    }
  },
  ['blog-posts-by-tag'],
  {
    revalidate: 300, // 5 minutes
    tags: ['blog', 'posts', 'tags']
  }
);

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
