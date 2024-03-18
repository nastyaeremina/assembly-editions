'use client';

import React from 'react';
import { LeftDetail,  RightTab, Tab } from './tabstyled';
import { bgcolor1 } from '../../styles/color';

const NewTabNavItem = ({ description, id, title, activeTab, setActiveTab, bgColor, textColor }) => {
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
          bgColor={bgcolor1}
          textColor={textColor}
          onClick={handleClick}
          className={activeTab === id ? 'active' : ''}>
          {title}
        </Tab>
  );
};

export default NewTabNavItem;
