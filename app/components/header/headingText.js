import React from 'react';
import { isEmpty, separateSpecialChar } from '../../helpers/helpers';

/**
 * HeadingText Component
 *
 * Renders a dynamic heading element based on the provided title and level.
 * Utilizes the separateSpecialChar function to handle special characters in the title.
 *
 * @param {Object} props - The component props.
 *   @property {string} title - The text content for the heading.
 *   @property {number} level - The heading level (1 for h1, 2 for h2 by default, etc.).
 *
 * @returns {JSX.Element} - A React component that displays the dynamic heading.
 */
const HeadingText = ({ title, level = 2 }) => {
  if (isEmpty(title)) return null;
  // Determine the heading tag based on the provided level
  const HeadingTag = `h${level}`;

  return (
    <HeadingTag>
      <div dangerouslySetInnerHTML={{ __html: separateSpecialChar(title) }} />
    </HeadingTag>
  );
};

export default HeadingText;
