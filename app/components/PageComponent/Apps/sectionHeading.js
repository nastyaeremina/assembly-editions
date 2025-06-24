import React from 'react';
import { separateSpecialChar } from '../../../helpers/helpers';
import { SetupAutomation } from '../../../styles/automationStyles';

/**
 * Section Heading Component
 * A component that displays a heading for each section, with optional styling and padding adjustments.
 *
 * @param {Object} props - The props for the component.
 * @param {string} details - The section title, which can include HTML for styling.
 * @param {boolean} isRemovePadding - A flag that, when true, removes the top and bottom padding of the heading.
 * @param {boolean} isTitle - A flag that indicates if the text should be treated as the primary title.
 */

function SectionHeading({ details, isTitle = false, isRemovePadding = false }) {
  return (
    <SetupAutomation istitle={isTitle} isRemovePadding={isRemovePadding}>
      <div
        dangerouslySetInnerHTML={{
          __html: separateSpecialChar(details)
        }}
      />
    </SetupAutomation>
  );
}

export default SectionHeading;
