import GhostContentAPI from '@tryghost/content-api';

function createGhostClient(url, key) {
  if (!url || !key) return null;
  return new GhostContentAPI({ url, key, version: 'v5.0' });
}

// Create API instance with site credentials
export const api = createGhostClient(
  process.env.GHOST_API_URL,
  process.env.GHOST_CONTENT_API
);

export const ghostUpdatesAPI = createGhostClient(
  process.env.GHOST_UPDATE_API_URL,
  process.env.GHOST_UPDATE_CONTENT_API
);
