// Simple in-memory cache for blog data
class BlogCache {
  constructor() {
    this.cache = new Map();
    this.ttl = 5 * 60 * 1000; // 5 minutes TTL
  }

  set(key, data) {
    this.cache.set(key, {
      data,
      timestamp: Date.now()
    });
  }

  get(key) {
    const item = this.cache.get(key);
    if (!item) return null;

    // Check if item has expired
    if (Date.now() - item.timestamp > this.ttl) {
      this.cache.delete(key);
      return null;
    }

    return item.data;
  }

  clear() {
    this.cache.clear();
  }

  // Generate cache key for blog posts
  generatePostsKey(page = 1, limit = 8, tag = null, excludeId = null) {
    return `posts_${page}_${limit}_${tag || 'all'}_${excludeId || 'none'}`;
  }

  // Generate cache key for tags
  generateTagsKey() {
    return 'tags_all';
  }
}

// Export singleton instance
export const blogCache = new BlogCache();