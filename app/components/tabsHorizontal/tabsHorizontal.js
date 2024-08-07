import React, { useEffect, useMemo, useRef, useState } from 'react';
import SubHeroComponent from '../Hero/subHero';
import {
  BgImage,
  Caption,
  DesktopImageSection,
  Image,
  MainSection,
  ResponsiveImageSection,
  ShowImage,
  Tabbutton,
  TabsHorizontalSection,
  TabsSection,
  Title,
  ToolsTab
} from './styles';
import { Container } from '../../styles/commonStyles';

export default function TabsHorizontal({ heroSectionData, featuresList }) {
  const [selectedTab, setSelectedTab] = useState(0);
  const [currentHeight, setCurrentHeight] = useState();
  const mainSectionRef = useRef(null);
  useEffect(() => {
    if (mainSectionRef.current) {
      setCurrentHeight(mainSectionRef.current.offsetHeight);
    }
  }, [selectedTab, featuresList]);
  const renderMainSection = useMemo(() => {
    return (
      <MainSection id='mainSection' ref={mainSectionRef}>
        <BgImage>
          {featuresList.slice(0, 3).map((item, index) => {
            return (
              <>
                <Image
                  key={index}
                  src={item?.backgroundImage?.url}
                  alt=''
                  width={1224}
                  height={684}
                  style={{ width: '100%', height: '100%' }}
                  className={index === selectedTab ? 'active-img' : 'img'}
                />
              </>
            );
          })}
        </BgImage>
        <Tabbutton>
          <div className='outlet'>
            {featuresList.slice(0, 3).map((item, index) => {
              let isSelectedTab = selectedTab === index;
              return (
                <>
                  <ShowImage isSelectedTab={isSelectedTab}>
                    <Image
                      src={item?.image?.url}
                      alt='msg-screen'
                      width={1005}
                      height={628}
                      loading='eager'
                      priority={true}
                    />
                  </ShowImage>
                </>
              );
            })}
          </div>
        </Tabbutton>
      </MainSection>
    );
  }, [featuresList, selectedTab]);
  return (
    <Container>
      <TabsHorizontalSection>
        <SubHeroComponent data={heroSectionData} hasFullWidth />
        <DesktopImageSection>{renderMainSection}</DesktopImageSection>
        <TabsSection>
          {featuresList.slice(0, 3).map((item, index) => (
            <>
              <ToolsTab onClick={() => setSelectedTab(index)} selectedTab={index === selectedTab}>
                <Title selectedTab={index === selectedTab}>{item.subTitle}</Title>
                <Caption>{item.description}</Caption>
              </ToolsTab>
              <ResponsiveImageSection
                className={index === selectedTab && 'responsive-image'}
                style={{ height: index === selectedTab && currentHeight }}>
                {index === selectedTab && renderMainSection}
              </ResponsiveImageSection>
            </>
          ))}
        </TabsSection>
      </TabsHorizontalSection>
    </Container>
  );
}
