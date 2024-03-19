'use client';

import React from 'react';
import { Tab } from './hometabstyle';

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
      bgColor={bgColor}
      textColor={textColor}
      onClick={handleClick}
      className={activeTab === id ? 'active' : ''}>
      {title}
    </Tab>
  );
};

export default NewTabNavItem;
