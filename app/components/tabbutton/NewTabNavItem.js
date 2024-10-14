'use client';

import React from 'react';
import { isEmpty } from '../../helpers/helpers';

const NewTabNavItem = ({ eleId, id, title, activeTab, setActiveTab }) => {
  return (
    <div
      // Unique ID for the tab element
      id={eleId}
      className='tab'
      onClick={() => {
        setActiveTab(id);
      }}
      style={{
        // If the tab is active or if it's the first tab than apply this css for text color
        color: activeTab === id || (id === 0 && isEmpty(activeTab)) ? `var(--light-green)` : `var(--black)`
      }}>
      {title}
    </div>
  );
};

export default NewTabNavItem;
