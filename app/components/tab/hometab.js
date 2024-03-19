'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { ContainWrap, IconSvg, IconWrap, LeftDetail, RightDetail } from '../../styles/homepageStyles';
import TabContent from '../tabbutton/TabContent';
import NewTabNavItem from '../tabbutton/NewTabNavItem';
import { LeftContent, Nav, RightContent, Tabbutton, TabbuttonBottom, TabbuttonTop } from '../tabbutton/hometabstyle';
import featurebackground from '/public/images/Featurbackgroundimage.png';
import { greendark, greenlight } from '../../styles/color';

export default function HomeTabView({ bgColor, textColor, isHome, tabData: allPosts, isAutomation }) {
  const [activeTab, setActiveTab] = useState(0);

  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Nav>
        <ul className='nav'>
          {allPosts?.map((item, index) => {
            return (
              <>
                <NewTabNavItem
                  title={item?.title}
                  bgColor={greendark}
                  textColor={greenlight}
                  id={index}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
              </>
            );
          })}
        </ul>
      </Nav>
      <Tabbutton className='Tabs' bgimage={allPosts[activeTab]?.backgroundImage?.url || featurebackground.src}>
        <TabbuttonTop>
          <LeftContent>{allPosts[activeTab]?.description}</LeftContent>
          <RightContent>
            <ul className='nav'>
              {allPosts?.map((item, index) => {
                return (
                  <>
                    <div>
                      <NewTabNavItem
                        title={item?.title}
                        bgColor={greendark}
                        textColor={greenlight}
                        id={index}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                      />
                    </div>
                  </>
                );
              })}
            </ul>
          </RightContent>
        </TabbuttonTop>
        <div className='outlet'>
          {allPosts?.map((item, index) => {
            const link = item?.link?.split('copilot.com/')?.[1];
            var extension = item?.image?.url?.split('.').pop();
            let isGifFile = extension === 'gif';
            return (
              <>
                <TabContent id={index} activeTab={activeTab}>
                  <>
                    <TabbuttonBottom onClick={onClick} isAutomation={isAutomation} isGifFile={isGifFile}>
                      <Image src={item?.image?.url} alt='msg-screen' width={881.76} height={550.63} />
                    </TabbuttonBottom>
                  </>
                </TabContent>
              </>
            );
          })}
        </div>
      </Tabbutton>
    </>
  );
}
