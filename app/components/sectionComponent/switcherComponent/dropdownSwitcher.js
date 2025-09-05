'use client';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { DropdownWrapper, DropdownButton, DropdownList, DropdownItem } from './style';
import SVGComponent from '../../../../public/images/svg/SVGComponent';

function DropdownSwitcher({ tabItems, tone, onTabChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(tabItems?.[0]);
  const dropdownRef = useRef(null);

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleItemClick = useCallback(
    (item) => {
      setSelectedItem(item);
      onTabChange(item);
      setIsOpen(false);
    },
    [onTabChange]
  );

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <DropdownWrapper ref={dropdownRef}>
      <DropdownButton onClick={handleToggle} tone={tone}>
        {selectedItem?.title}
        <SVGComponent
          name='angle-down-arrow-icon'
          width='16'
          height='16'
          viewBox='0 0 16 16'
          className={isOpen ? 'rotate-down-icon' : 'rotate-icon'}
        />
      </DropdownButton>

      {isOpen && (
        <DropdownList tone={tone}>
          {tabItems.map((item, index) => (
            <DropdownItem
              key={index}
              onClick={() => handleItemClick(item)}
              tone={tone}
              selected={selectedItem?.title === item.title}>
              {item.title}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownWrapper>
  );
}

export default DropdownSwitcher;
