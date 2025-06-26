import React, { useCallback, useLayoutEffect, useRef, useState, useEffect } from 'react';
import SubHeroComponent from '../Hero/subHero';
import { Container } from '../../styles/commonStyles';
import {
  BgImage,
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

export default function TabsVertical({ heroSectionData, featuresList }) {
  const [selectedTab, setSelectedTab] = useState(0);
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
  }, [selectedTab, featuresList, currentHeight]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        if (featuresList.length > 0 && window.innerWidth > 768) {
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

  /**
   * @param {Object} props - The props object.
   * @param {React.RefObject} props.ref - The ref object.
   * @returns {React.ReactNode} The rendered main section.
   */
  const renderMainSection = useCallback(
    ({ ref }) => (
      <MainSection id='mainSection' ref={ref}>
        <BgImage>
          {featuresList.map((item, index) => (
            <Image
              key={index}
              src={item?.backgroundImage?.url}
              alt=''
              width={612}
              height={648}
              style={{ width: '100%', height: '100%' }}
              className={index === selectedTab ? 'active-img' : 'img'}
            />
          ))}
        </BgImage>
        <Tabbutton>
          <div className='outlet'>
            {featuresList.map((item, index) => {
              let isSelectedTab = selectedTab === index;
              return (
                <ShowImage key={index} isSelectedTab={isSelectedTab}>
                  <Image
                    src={item?.image?.url}
                    alt='msg-screen'
                    width={532}
                    height={568}
                    loading='eager'
                    priority={true}
                  />
                </ShowImage>
              );
            })}
          </div>
        </Tabbutton>
      </MainSection>
    ),
    [featuresList, selectedTab]
  );

  return (
    <Container>
      <TabsVerticalSection>
        <TabsVerticalLeft>
          <SubHeroComponent data={heroSectionData} hasFullWidth />
          <TabsSection style={{ maxHeight: maxHeight }}>
            {featuresList.map((item, index) => {
              return (
                <>
                  <ToolsTab
                    id={`item-${index}`}
                    onClick={() => setSelectedTab(index)}
                    selectedTab={index === selectedTab}>
                    <Title selectedTab={index === selectedTab}>{item.subTitle}</Title>
                    <DesktopCaption style={{ height: index === selectedTab ? currentCaptionHeight : 0 }}>
                      {index === selectedTab && <Caption ref={captionRef}>{item.description}</Caption>}
                    </DesktopCaption>
                    <ResponsiveCaption>
                      <Caption>{item.description}</Caption>
                    </ResponsiveCaption>
                  </ToolsTab>
                  <ResponsiveImageSection
                    className={index === selectedTab && 'responsive-image'}
                    style={{ height: index === selectedTab && currentHeight }}>
                    {index === selectedTab && renderMainSection({ ref: responsiveMainSectionRef })}
                  </ResponsiveImageSection>
                </>
              );
            })}
          </TabsSection>
        </TabsVerticalLeft>
        <TabsVerticalRight>{renderMainSection({ ref: mainSectionRef })}</TabsVerticalRight>
      </TabsVerticalSection>
    </Container>
  );
}
