import React, { useLayoutEffect, useMemo, useRef, useState } from 'react';
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
  const mainSectionRef = useRef(null);
  const captionRef = useRef(null);
  useLayoutEffect(() => {
    if (mainSectionRef.current) {
      setCurrentHeight(mainSectionRef.current.offsetHeight);
    }
    if (captionRef.current) {
      setCurrentCaptionHeight(captionRef.current.offsetHeight);
    }
  }, [selectedTab, featuresList]);
  const renderMainSection = useMemo(
    () => (
      <MainSection id='mainSection' ref={mainSectionRef}>
        <BgImage>
          {featuresList.slice(0, 3).map((item, index) => (
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
            {featuresList.slice(0, 3).map((item, index) => {
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
          <TabsSection>
            {featuresList.slice(0, 3).map((item, index) => {
              return (
                <>
                  <ToolsTab onClick={() => setSelectedTab(index)} selectedTab={index === selectedTab}>
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
                    {index === selectedTab && renderMainSection}
                  </ResponsiveImageSection>
                </>
              );
            })}
          </TabsSection>
        </TabsVerticalLeft>
        <TabsVerticalRight>{renderMainSection}</TabsVerticalRight>
      </TabsVerticalSection>
    </Container>
  );
}
