import React, { useCallback, useLayoutEffect, useRef, useState, useEffect } from 'react';
import SectionHeader from '../sectionHeader/sectionHeader';
import { DESKTOP_BREAKPOINT } from '../../constants/constant';
import { Container } from '../../styles/commonStyles';
import {
  Caption,
  DesktopCaption,
  Image,
  MainSection,
  ResponsiveCaption,
  ResponsiveImageSection,
  ShowImage,
  Tabbutton,
  TabsSection,
  TabsVerticalLeft,
  TabsVerticalRight,
  TabsVerticalSection,
  Title,
  ToolsTab
} from './styles';

export default function TabsVertical({
  featuresList,
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  primaryButtonLink,
  secondaryButtonLink
}) {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedTabs, setSelectedTabs] = useState([0]); // For mobile/tablet - multiple selections
  const [isMobile, setIsMobile] = useState(false);
  const [currentHeight, setCurrentHeight] = useState(0);
  const [currentCaptionHeight, setCurrentCaptionHeight] = useState();
  const [maxHeight, setMaxHeight] = useState(0);
  const mainSectionRef = useRef(null);
  const responsiveMainSectionRef = useRef(null);
  const captionRef = useRef(null);

  useLayoutEffect(() => {
    if (mainSectionRef.current) {
      setCurrentHeight(mainSectionRef.current.offsetHeight);
    }
    if (responsiveMainSectionRef.current) {
      setCurrentHeight(responsiveMainSectionRef.current.offsetHeight);
    }
    if (captionRef.current) {
      setCurrentCaptionHeight(captionRef.current.offsetHeight);
    }
  }, [selectedTab, selectedTabs, featuresList, currentHeight]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        const isDesktop = window.innerWidth > DESKTOP_BREAKPOINT;
        setIsMobile(!isDesktop);

        if (featuresList.length > 0 && isDesktop) {
          const totalHeight = featuresList.slice(0, 3).reduce((acc, item, index) => {
            const element = document.getElementById(`item-${index}`);
            return acc + (element ? element.offsetHeight + 15 : 0);
          }, 0);
          setMaxHeight(totalHeight);
        } else {
          setMaxHeight(''); // Reset maxHeight for non-desktop screens
        }
      };

      // Initial calculation
      handleResize();

      // Add resize event listener
      window.addEventListener('resize', handleResize);

      // Cleanup event listener on unmount
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [featuresList]);

  // Handle tab click - add to selection for mobile/tablet, replace for desktop
  const handleTabClick = useCallback(
    (index) => {
      if (isMobile) {
        // Mobile/Tablet: add the clicked tab if not already selected (don't close on re-click)
        setSelectedTabs((prev) => {
          if (!prev.includes(index)) {
            return [...prev, index];
          }
          return prev;
        });
      } else {
        // Desktop: replace with single selection
        setSelectedTab(index);
      }
    },
    [isMobile]
  );

  // Check if a tab is selected
  const isTabSelected = useCallback(
    (index) => {
      return isMobile ? selectedTabs.includes(index) : selectedTab === index;
    },
    [isMobile, selectedTab, selectedTabs]
  );

  /**
   * @param {Object} props - The props object.
   * @param {React.RefObject} props.ref - The ref object.
   * @param {number} props.tabIndex - Optional tab index for mobile/tablet specific image
   * @returns {React.ReactNode} The rendered main section.
   */
  const renderMainSection = useCallback(
    ({ ref, tabIndex }) => {
      const imageIndex = tabIndex !== undefined ? tabIndex : selectedTab;
      return (
        <MainSection id='mainSection' ref={ref}>
          <Tabbutton>
            {featuresList.map((item, index) => {
              let isSelectedTab = imageIndex === index;
              return (
                <ShowImage key={index} isSelectedTab={isSelectedTab}>
                  <Image
                    src={item?.image?.url}
                    alt='msg-screen'
                    width={1224}
                    height={568}
                    loading='eager'
                    priority={true}
                    style={{ width: '100%', height: '100%' }}
                  />
                </ShowImage>
              );
            })}
          </Tabbutton>
        </MainSection>
      );
    },
    [featuresList, selectedTab]
  );

  return (
    <Container>
      <TabsVerticalSection>
        <TabsVerticalLeft>
          <SectionHeader
            title={title}
            description={description}
            primaryButtonLink={primaryButtonLink}
            primaryButtonText={primaryButtonText}
            secondaryButtonLink={secondaryButtonLink}
            secondaryButtonText={secondaryButtonText}
          />
          <TabsSection style={{ maxHeight: maxHeight }}>
            {featuresList.map((item, index) => {
              const isSelected = isTabSelected(index);
              return (
                <React.Fragment key={index}>
                  <ToolsTab
                    id={`item-${index}`}
                    onClick={() => handleTabClick(index)}
                    selectedTab={isSelected}
                    isAboveSelected={index === selectedTab - 1}>
                    <Title selectedTab={isSelected}>{item.subTitle}</Title>
                    <DesktopCaption style={{ height: isSelected ? currentCaptionHeight : 0 }}>
                      {isSelected && (
                        <Caption ref={captionRef} selectedTab={isSelected}>
                          {item.description}
                        </Caption>
                      )}
                    </DesktopCaption>
                    <ResponsiveCaption>
                      <Caption selectedTab={isSelected}>{item.description}</Caption>
                    </ResponsiveCaption>
                  </ToolsTab>
                  <ResponsiveImageSection
                    className={isSelected && 'responsive-image'}
                    style={{ height: isSelected && currentHeight }}>
                    {isSelected && renderMainSection({ ref: responsiveMainSectionRef, tabIndex: index })}
                  </ResponsiveImageSection>
                </React.Fragment>
              );
            })}
          </TabsSection>
        </TabsVerticalLeft>
        <TabsVerticalRight>{renderMainSection({ ref: mainSectionRef })}</TabsVerticalRight>
      </TabsVerticalSection>
    </Container>
  );
}
