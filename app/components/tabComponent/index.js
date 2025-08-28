'use client';
import React from 'react';
import { Tag, TagDiv } from './style';

function TabComponent({ items = [], selectedTag }) {
  return (
    <TagDiv>
      {items?.map((item) => (
        <Tag
          key={item.name}
          href={item.slug === 'all' ? '/blog' : `/blog/tag/${item.slug}`}
          className={selectedTag === item.name ? 'active' : ''}>
          {item.name}
        </Tag>
      ))}
    </TagDiv>
  );
}

export default TabComponent;
