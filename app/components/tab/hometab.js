'use client';
import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import NewTabNavItem from '../tabbutton/NewTabNavItem';
import {
  BgImage,
  Description,
  LeftContent,
  MainSection,
  Nav,
  RightContent,
  ShowImage,
  Tabbutton,
  TabbuttonTop
} from '../tabbutton/hometabstyle';
import featurebackground from '/public/images/Featurbackgroundimage.png';
import useMobileDevice from '../../hooks/useMobileDevice';

export default function HomeTabView({ tabData: allPosts, isAutomation }) {
  const [activeTabId, setActiveTabId] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const [totalWidth, setTotalWidth] = useState(0);
  const [maxHeight, setMaxHeight] = useState(0);

  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  };
  // Check is mobile or not
  const isMobile = useMobileDevice();

  // Function to get the width of an element based on index
  const getElementWidth = useCallback(
    (index) => {
      // Get the item data from allPosts
      let item = allPosts[index];
      // Dynamically generates unique IDs for tab elements based on mobile/desktop view
      // Appending '00' for mobile to ensure different IDs for the same tab
      const eleId = `${item.title.replace(/ /g, '').toLowerCase()}${isMobile ? '00' : ''}${index}`;
      // Select the element using the generated ID
      const element = document.querySelector(`.tabs #${eleId}`);
      // Get the width of the element
      var width = element?.clientWidth;
      return width;
    },
    [allPosts, isMobile]
  );

  const getTextContentMaxHeight = useCallback(() => {
    // Use setTimeout to ensure that the DOM elements are rendered before accessing them
    setTimeout(() => {
      allPosts?.forEach((item, index) => {
        // Get the element by its ID (dynamic ID based on item title)
        const element = document.getElementById(item?.title);
        if (element) {
          const height = element.offsetHeight;
          if (height > maxHeight) {
            setMaxHeight(height);
          }
        }
      });
    }, 200); // Wait 200 milliseconds before executing the code inside setTimeout
  }, [allPosts, maxHeight]);

  // Effect to set the initial width when the component mounts or when allPosts changes
  useEffect(() => {
    // Get the width of the first element
    var width = getElementWidth(0);
    // Set the initial width state
    setWidth(width);
    getTextContentMaxHeight();
  }, [getElementWidth, getTextContentMaxHeight]);

  const handleTabClick = useCallback(
    (index) => {
      // Set the active tab ID
      setActiveTabId(index);
      // Initialize total width
      let totalWidth = 0;
      // Iterate through the tabs to calculate total width up to the clicked tab
      for (let i = 0; i < index; i++) {
        // Get the width of each tab
        let width = getElementWidth(i);
        // Add it to the total width
        totalWidth = totalWidth + width;
      }
      // Set the total width state
      setTotalWidth(totalWidth);
      // Get the width of the clicked tab
      var width = getElementWidth(index);
      // Set the width state
      setWidth(width);
    },
    [getElementWidth]
  );

  const renderTabBar = useCallback(
    (isMobile) => {
      return (
        <div className='tabsection'>
          <div className='activetab' style={{ transform: `translateX(${totalWidth}px)`, width: `${width}px` }}></div>
          {allPosts?.map((item, index) => {
            // Dynamically generates unique IDs for tab elements based on mobile/desktop view
            // Appending '00' for mobile to ensure different IDs for the same tab
            const eleId = `${item.title.replace(/ /g, '').toLowerCase()}${isMobile ? '00' : ''}${index}`;
            return (
              <>
                <NewTabNavItem
                  title={item?.title}
                  id={index}
                  eleId={eleId}
                  setActiveIndex={(index) => {
                    setActiveIndex(index);
                  }}
                  activeTab={activeTabId}
                  setActiveTab={handleTabClick}
                  activeIndex={activeIndex}
                />
              </>
            );
          })}
        </div>
      );
    },
    [activeIndex, activeTabId, allPosts, handleTabClick, totalWidth, width]
  );

  return (
    <>
      {/* For Mobile  */}
      <Nav className='tabs'>{renderTabBar(true)}</Nav>
      {/* For Desktop */}
      <MainSection>
        <BgImage>
          {allPosts?.map((item, index) => {
            return (
              <>
                <Image
                  src={item?.backgroundImage?.url}
                  alt=''
                  width={1000}
                  height={500}
                  style={{ width: '100%', height: '100%' }}
                  className={index === activeTabId ? 'active-img' : 'img'}
                />
              </>
            );
          })}
        </BgImage>
        <Tabbutton className='tabs'>
          <TabbuttonTop id='text-content'>
            <Description height={maxHeight}>
              {allPosts?.map((item, index) => {
                return (
                  <>
                    <LeftContent isShow={activeTabId === index} id={item?.title}>
                      {item?.description}
                    </LeftContent>
                  </>
                );
              })}
            </Description>
            <RightContent>{renderTabBar()}</RightContent>
          </TabbuttonTop>
          <div className='outlet'>
            {allPosts?.map((item, index) => {
              var extension = item?.image?.url?.split('.').pop();
              let isGifFile = extension === 'gif';
              let isSelectedTab = activeTabId === index;
              return (
                <>
                  <ShowImage isSelectedTab={isSelectedTab}>
                    <Image
                      src={item?.image?.url}
                      alt='msg-screen'
                      width={881.76}
                      height={550.63}
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
    </>
  );
}
