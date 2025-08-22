'use client';
import React from 'react';
import { Tag, TagDiv } from './style';

function TabComponent({ items = [], onTagClick, selectedTag }) {
  return (
    <TagDiv>
      <Tag key='__all__' onClick={() => onTagClick('All')} className={selectedTag === 'All' ? 'active' : ''}>
        All
      </Tag>
      {items?.map((item) => (
        <Tag
          key={item.name}
          onClick={() => onTagClick(item.name)}
          className={selectedTag === item.name ? 'active' : ''}>
          {item.name}
        </Tag>
      ))}
    </TagDiv>
  );
}

export default TabComponent;
