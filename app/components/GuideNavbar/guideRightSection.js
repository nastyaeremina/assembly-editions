'use client';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { GuideRight, ItemList, ItemName, ItemSubName } from './styles';

export default function GuideRightSection({ data }) {
  const [activeItem, setActiveItem] = useState(null);
  const renderHierarchy = useCallback(
    (data, isFirst = true) => {
      return data.map((item) => {
        if (item.items && item.items.length > 0) {
          return (
            <ItemSubName key={item.id} isSelected={activeItem === item.id}>
              <Link href={`#${item.id}`}>{item.title}</Link>
              {renderHierarchy(item.items, false)}
            </ItemSubName>
          );
        } else {
          return (
            <>
              {isFirst ? (
                <ItemName key={item.id} isSelected={activeItem === item.id}>
                  <Link href={`#${item.id}`}>{item.title}</Link>
                </ItemName>
              ) : (
                <ItemSubName key={item.id} isSelected={activeItem === item.id}>
                  <Link href={`#${item.id}`}>{item.title}</Link>
                </ItemSubName>
              )}
            </>
          );
        }
      });
    },
    [activeItem]
  );

  useEffect(() => {
    const handleScroll = () => {
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      for (const heading of headings) {
        const boundingBox = heading.getBoundingClientRect();
        if (boundingBox.top <= 80) {
          setActiveItem(heading.id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize the active item on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <GuideRight>
      <ItemList>
        <ItemName isSelected={activeItem === 'overview'}>
          <Link href={'#overview'}>Overview</Link>
        </ItemName>
        {renderHierarchy(data)}
      </ItemList>
    </GuideRight>
  );
}
