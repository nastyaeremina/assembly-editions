'use client';
import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { DropDownWrapper, DropDownHeader, DropDownListContainer, DropDownList, ListItem } from './style';
import SVGComponent from '../../../public/images/svg/SVGComponent';

function DropDown({ items = [], placeholder = 'Select', onSelect, defaultValue = null, labelKey = 'name' }) {
  // ✅ find "All" from items, or use defaultValue, or fallback to null
  const getDefaultItem = useMemo(() => {
    if (defaultValue) return defaultValue;
    const allItem = items.find((item) => item[labelKey] === 'All');
    return allItem || null;
  }, []);

  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(getDefaultItem);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = useCallback(() => setIsOpen(!isOpen), []);

  const handleSelect = (item) => {
    setSelectedItem(item);
    onSelect && onSelect(item);
    setIsOpen(false);
  };

  return (
    <DropDownWrapper ref={ref}>
      <DropDownHeader onClick={toggleDropdown}>
        {selectedItem ? selectedItem[labelKey] : placeholder}
        <SVGComponent name='dropdown-arrow-icon' width='16' height='16' viewBox='0 0 16 17' />
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {items.map((item, index) => (
              <ListItem
                key={item.id || index}
                onClick={() => handleSelect(item)}
                className={selectedItem?.id === item.id ? 'active' : ''}>
                {item[labelKey]}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownWrapper>
  );
}

export default DropDown;
