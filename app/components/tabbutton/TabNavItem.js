'use client';

import React from 'react';
import { Tab } from './tabstyled';

const TabNavItem = ({ id, title, activeTab, setActiveTab, bgColor, textColor }) => {
  // Concatenate the title string with the index of the tab item (id)
  // The title string is first processed by removing all spaces and converting it to lowercase
  const eleId = title.replace(/ /g, '').toLowerCase() + id;
  const handleClick = () => {
    setActiveTab(id);
    document.getElementById(eleId).scrollIntoView({
      behavior: 'smooth',
      block: 'nearest'
    });
  };

  return (
    <Tab
      id={eleId}
      bgColor={bgColor}
      textColor={textColor}
      onClick={handleClick}
      className={activeTab === id ? 'active' : ''}>
      {title}
    </Tab>
  );
};
export default TabNavItem;
