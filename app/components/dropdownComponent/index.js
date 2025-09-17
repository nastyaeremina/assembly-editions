'use client';
import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { DropDownWrapper, DropDownHeader, DropDownListContainer, DropDownList, ListItem } from './style';
import SVGComponent from '../../../public/images/svg/SVGComponent';

// Customizable dropdown menu component
function DropDown({
  items = [],
  placeholder = 'Select',
  onSelect,
  defaultValue = null,
  labelKey = 'name',
  applyDropdownCss = false,
  isError = false,
  id,
  name,
  dataName
}) {
  // Calculate default selected item (All, defaultValue, or null)
  const getDefaultItem = useMemo(() => {
    if (defaultValue) return defaultValue;
    const allItem = items.find((item) => item[labelKey] === 'All');
    return allItem || null;
  }, [defaultValue, items, labelKey]);

  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(getDefaultItem);

  // Update selectedItem when defaultValue changes
  useEffect(() => {
    if (defaultValue) {
      setSelectedItem(defaultValue);
    }
  }, [defaultValue]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Toggle dropdown open/close state
  const toggleDropdown = useCallback(() => setIsOpen(!isOpen), []);

  // Handle item selection and close dropdown
  const handleSelect = (item) => {
    setSelectedItem(item);
    onSelect && onSelect(item);
    setIsOpen(false);
  };

  return (
    <DropDownWrapper ref={ref}>
      <DropDownHeader
        onClick={toggleDropdown}
        applyDropdownCss={applyDropdownCss}
        isError={isError}
        isOpen={isOpen}
        isPlaceholderColor={!selectedItem}
        tabIndex={0}
        role='button'
        aria-expanded={isOpen}
        aria-haspopup='listbox'
        id={id}
        name={name}
        data-name={dataName}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleDropdown();
          }
        }}>
        {selectedItem ? selectedItem[labelKey] : placeholder}
        <SVGComponent
          name='dropdown-arrow-icon'
          width='16'
          height='16'
          viewBox='0 0 16 17'
          className={isOpen ? 'rotate-icon' : ''}
        />
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer applyDropdownCss={applyDropdownCss}>
          <DropDownList applyDropdownCss={applyDropdownCss}>
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
