// Performance monitoring utility for blog operations
export class PerformanceMonitor {
  static timers = new Map();

  static start(label) {
    this.timers.set(label, performance.now());
  }

  static end(label) {
    const startTime = this.timers.get(label);
    if (startTime) {
      const duration = performance.now() - startTime;
      console.log(`⏱️ ${label}: ${duration.toFixed(2)}ms`);
      this.timers.delete(label);
      return duration;
    }
    return 0;
  }

  static async measure(label, asyncFn) {
    this.start(label);
    try {
      const result = await asyncFn();
      this.end(label);
      return result;
    } catch (error) {
      this.end(label);
      throw error;
    }
  }
}

// Blog-specific performance helpers
export const blogPerf = {
  async measurePostsFetch(fetchFn, label = 'Posts Fetch') {
    return PerformanceMonitor.measure(label, fetchFn);
  },

  async measureTagsFetch(fetchFn, label = 'Tags Fetch') {
    return PerformanceMonitor.measure(label, fetchFn);
  },

  logCacheHit(key) {
    console.log(`🎯 Cache HIT: ${key}`);
  },

  logCacheMiss(key) {
    console.log(`❌ Cache MISS: ${key}`);
  }
};