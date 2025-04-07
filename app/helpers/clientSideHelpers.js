'use client';
import ReactDOMServer from 'react-dom/server';
import { Video } from '../components/htmlVideo';

/**
 * Renders a video tag in HTML content.
 *
 * @param {string} htmlContent - The HTML content to render the video in.
 * @returns {string} The HTML content with the video tag rendered.
 */
export const renderContentWithVideos = (htmlContent) => {
  return htmlContent.replace(/<video[^>]*src="([^"]*)"[^>]*><\/video>/g, (match, src) => {
    return `<div>${ReactDOMServer.renderToString(<Video src={src} />)}</div>`;
  });
};