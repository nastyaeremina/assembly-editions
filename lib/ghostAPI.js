import GhostContentAPI from '@tryghost/content-api';

// Create API instance with site credentials
export const api = new GhostContentAPI({
  url: process.env.GHOST_API_URL,
  key: process.env.GHOST_CONTENT_API,
  version: 'v5.0'
});

export const ghostUpdatesAPI = new GhostContentAPI({
  url: process.env.GHOST_UPDATE_API_URL,
  key: process.env.GHOST_UPDATE_CONTENT_API,
  version: 'v5.0'
});
