import GhostContentAPI from '@tryghost/content-api';
import {
  COPILOT_UPDATES_GHOST_API_URL,
  COPILOT_UPDATES_GHOST_CONTENT_API,
  GHOST_API_URL,
  GHOST_CONTENT_API
} from '../constants/environment';

// Create API instance with site credentials
export const api = new GhostContentAPI({
  url: process.env.GHOST_API_URL,
  // url: 'https://copilot-blog.ghost.io',
  key: process.env.GHOST_CONTENT_API,
  version: 'v5.0'
});

export const ghostUpdatesAPI = new GhostContentAPI({
  url: process.env.GHOST_UPDATE_API_URL,
  // url: 'https://copilot-blog.ghost.io',
  key: process.env.GHOST_UPDATE_CONTENT_API,
  version: 'v5.0'
});
