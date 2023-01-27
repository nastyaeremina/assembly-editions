import GhostContentAPI from '@tryghost/content-api';
import { GHOST_API_URL, GHOST_CONTENT_API } from '../constants/environment';

// Create API instance with site credentials
export const api = new GhostContentAPI({
  url: GHOST_API_URL,
  key: GHOST_CONTENT_API,
  version: 'v5.0'
});
