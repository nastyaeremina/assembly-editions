'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { ContainWrap, IconSvg, IconWrap, LeftDetail, RightDetail } from '../../styles/homepageStyles';
import Button from '../button/button';
import TabContent from '../tabbutton/TabContent';
import TabNavItem from '../tabbutton/TabNavItem';
import { Tabbutton } from '../tabbutton/tabstyled';
import ZoomImg from '../zoomImage';
import { CURRENT_DOMAIN } from '../../constants/constant';

export default function TabView({ bgColor, textColor, isHome, tabData: allPosts, isAutomation }) {
  const [activeTab, setActiveTab] = useState(0);

  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Tabbutton className='Tabs'>
        <ul className='nav'>
          {allPosts?.map((item, index) => {
            return (
              <>
                <TabNavItem
                  title={item?.title}
                  bgColor={bgColor}
                  textColor={textColor}
                  id={index}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
              </>
            );
          })}
        </ul>
        <div className='outlet'>
          {allPosts?.map((item, index) => {
            const link = item?.link?.split(`${CURRENT_DOMAIN}/`)?.[1];
            var extension = item?.image?.url?.split('.').pop();
            let isGifFile = extension === 'gif';
            return (
              <>
                <TabContent id={index} activeTab={activeTab}>
                  <ContainWrap isAutomation={isAutomation}>
                    <LeftDetail>
                      {item?.icon?.url && (
                        <IconWrap>
                          <IconSvg>
                            <Image src={item?.icon?.url} width={44} height={44} alt='msg-icon' />
                          </IconSvg>
                        </IconWrap>
                      )}
                      <h3>{item?.title}</h3>
                      <ReactMarkdown>{item?.description}</ReactMarkdown>
                      {link && (
                        <Button
                          bgColor={'transparent'}
                          fontColor={'--black'}
                          borderColor={'--black'}
                          href={link ?? ''}
                          text={'Learn More'}
                          hoverColor={'--hover-color'}
                          className='btnmobi'
                        />
                      )}
                    </LeftDetail>
                    <RightDetail onClick={onClick} isAutomation={isAutomation} isGifFile={isGifFile}>
                      <ZoomImg src={item?.image?.url} width={881.76} height={550.63} alt='msg-screen' />
                    </RightDetail>
                  </ContainWrap>
                </TabContent>
              </>
            );
          })}
        </div>
      </Tabbutton>
    </>
  );
}
