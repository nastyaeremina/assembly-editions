import React, { useState } from 'react';
import { isEmpty, stringToSlugyfy } from '../../helpers/helpers';
import ResponsiveDropdown from './responsiveDropdown';

function ResponsiveSubsection({ subsectionData }) {
  const [openSection, setOpenSection] = useState();
  const allTitlesBlank = subsectionData.every(
    (section) => isEmpty(section.title) || section.title?.toLowerCase() === 'footer'
  );

  const mergedItems = allTitlesBlank
    ? [
        {
          items: subsectionData
            .filter((section) => !section.title || section.title?.toLowerCase() === 'footer')
            .flatMap((section) =>
              section.items.map((item) => ({
                ...item,
                isFooter: section.title?.toLowerCase() === 'footer' // Add isFooter field
              }))
            )
        }
      ]
    : subsectionData;

  const footerData = mergedItems.find((section) => section.title?.toLowerCase() === 'footer')?.items ?? [];

  return (
    <>
      {mergedItems?.map((section, index) => {
        const id = `${stringToSlugyfy(section.title)}_index`;
        const isDropdownOpen = id === openSection;
        if (section.title?.toLowerCase() === 'footer') return null;
        const footerItem = footerData[index];

        return (
          <ResponsiveDropdown
            key={`section-${section.title}`}
            title={section.title}
            onClick={() => setOpenSection(isDropdownOpen ? '' : id)}
            className={isDropdownOpen ? 'open-icon' : 'close-icon'}
            dropDownClass={isDropdownOpen ? 'open' : ''}
            subSectionData={section.items}
            footerData={footerItem}
          />
        );
      })}
    </>
  );
}

export default ResponsiveSubsection;
