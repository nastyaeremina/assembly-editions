'use client';
import React, { useCallback, useState, useRef, useEffect, useMemo } from 'react';
import { TabSectionMainDiv, TabItems, TabSwitcherWrapperDiv, TabHighlighter } from './style';
import { useIsMobile } from '../../../hooks/useMobileDevice';
import DropdownSwitcher from './dropdownSwitcher';
import { isEmpty } from '../../../helpers/helpers';

/**
 * TabSwitcher component for displaying a set of clickable tabs.
 * @param {Object} props - Component props.
 * @param {Array<Object>} props.tabItems - An array of objects, where each object has a 'title' property for the tab and an 'image' property for the content.
 * @param {SectionTone} [props.tone=SectionTone.LIGHT] - The visual tone of the section, either light or dark.
 * @param {boolean} props.isButton - Indicates if the tab switcher is used with buttons, affecting its justification.
 * @param {Function} props.onTabChange - Callback function triggered when a tab is clicked, receiving the selected tab item.
 */

function TabSwitcher({ tabItems, tone, isButton, onTabChange }) {
  if (isEmpty(tabItems) || tabItems.length <= 1) return null; // don't render if 0 or 1 item

  const [selectedTab, setSelectedTab] = useState(tabItems[0]?.title);
  const [highlighterStyles, setHighlighterStyles] = useState({ width: 0, left: 0 });
  const tabRefs = useRef({});
  const isMobile = useIsMobile();

  const handleTabClick = useCallback(
    (item) => {
      setSelectedTab(item.title);
      onTabChange(item); // pass full tab item
    },
    [onTabChange]
  );

  useEffect(() => {
    if (selectedTab && tabRefs.current[selectedTab]) {
      const selectedTabElement = tabRefs.current[selectedTab];
      setHighlighterStyles({
        width: selectedTabElement.offsetWidth,
        left: selectedTabElement.offsetLeft
      });
    }
  }, [selectedTab, tabItems]);

  const renderTabItems = useMemo(() => {
    return tabItems.map((item, index) => (
      <TabItems
        key={index}
        ref={(el) => (tabRefs.current[item.title] = el)}
        onClick={() => handleTabClick(item)}
        selected={selectedTab === item.title}
        tone={tone}>
        {item.title}
      </TabItems>
    ));
  }, [tabItems, selectedTab, tone, handleTabClick]);

  return (
    <TabSwitcherWrapperDiv isButton={isButton}>
      {isMobile ? (
        <DropdownSwitcher tabItems={tabItems} tone={tone} onTabChange={onTabChange} />
      ) : (
        <TabSectionMainDiv tone={tone}>
          <TabHighlighter
            tone={tone}
            highlighterWidth={highlighterStyles.width}
            highlighterLeft={highlighterStyles.left}
          />
          {renderTabItems}
        </TabSectionMainDiv>
      )}
    </TabSwitcherWrapperDiv>
  );
}

export default TabSwitcher;
